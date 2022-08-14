import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../commons/hooks/useAuth";
import { schema } from "../../../commons/schema/market/yup-schema-market";
import MarketNewPresenter from "./MarketNew.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./MarketNew.queries";
import { IMarketNewContainerPageProps } from "./MarketNew.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketNewContainerPage(
  props: IMarketNewContainerPageProps
) {
  useAuth();

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);
  const [imageUrl, setImageUrl] = useState(["", "", ""]);
  const [location, setLocation] = useState("");

  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
              lat: data.lat,
              lng: data.lng,
            },
            images: imageUrl,
            tags: tagList,
          },
        },
      });
      console.log(result.data);
      Modal.success({ content: "상품등록이 완료되었습니다!" });
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const onClickUpdate = async (data: any) => {
    if (
      props.marketData?.fetchUseditem.name === data.name &&
      props.marketData?.fetchUseditem.remarks === data.remarks &&
      props.marketData?.fetchUseditem.contents === data.contents &&
      props.marketData?.fetchUseditem.price === data.price &&
      props.marketData?.fetchUseditem.useditemAddress.address ===
        data.address &&
      props.marketData?.fetchUseditem.useditemAddress.addressDetail ===
        data.addressDetail &&
      props.marketData?.fetchUseditem.tags === data.tags
    ) {
      Modal.error({
        content: "수정된 사항이 없습니다.",
      });
      return;
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: tagList,
            images: imageUrl,
            useditemAddress: {
              lat: data.lat,
              lng: data.lng,
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
          useditemId: router.query._id,
        },
      });

      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=105d9e45b37b65e70dd1d31a18e23d78&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: props.isEdit
            ? new window.kakao.maps.LatLng(
                props.marketData?.fetchUseditem.useditemAddress.lat,
                props.marketData?.fetchUseditem.useditemAddress.lng
              )
            : new window.kakao.maps.LatLng(37.3949, 127.1112),

          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          async function (mouseEvent: any) {
            const latlng = mouseEvent.latLng;
            setLat(latlng.getLat());
            setLng(latlng.getLng());

            marker.setPosition(latlng);

            const latlat = latlng.getLat();
            const lnglng = latlng.getLng();

            const result = await axios.get(
              `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lnglng}&y=${latlat}`,
              {
                headers: {
                  Authorization: "KakaoAK 16ec9c032045a88d61bc6d3cd063c7f6",
                },
              }
            );
            const location = result.data.documents[0]?.address?.address_name;
            console.log(location);
            setLocation(location);

            setValue("address", location);
            trigger("address");
            setValue("lat", latlat);
            trigger("lat");
            setValue("lng", lnglng);
            trigger("lng");
          }
        );
      });
    };
  }, []);

  useEffect(() => {
    props.isEdit && onChangeContents(props.marketData?.fetchUseditem.contents);
  }, []);

  const onChangeImageUrls = (fileUrl: string, index: number) => {
    const newImageUrl = [...imageUrl];
    newImageUrl[index] = fileUrl;
    setImageUrl(newImageUrl);
  };

  // 이미지 디폴트 밸류
  useEffect(() => {
    if (props.marketData?.fetchUseditem.images?.length) {
      setImageUrl([...props.marketData?.fetchUseditem.images]); //강아지 있는걸 아예 초기값으로 해주기
    }
  }, [props.marketData]);

  return (
    <MarketNewPresenter
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      marketData={props.marketData}
      lat={lat}
      lng={lng}
      tagItem={tagItem}
      setTagItem={setTagItem}
      tagList={tagList}
      setTagList={setTagList}
      location={location}
      imageUrl={imageUrl}
      onChangeImageUrls={onChangeImageUrls}
    />
  );
}
