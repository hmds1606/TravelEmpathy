import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { basketState } from "../../../../commons/global-state";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketDetailPresenter from "./MarketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";
import { IMarketDetailContainerPageProps } from "./MarketDetail.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetailContainerPage(
  props: IMarketDetailContainerPageProps
) {
  useAuth();

  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [, setBasketItems] = useRecoilState(basketState);

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query._id },
      });
      Modal.success({ content: "구매가 완료되었습니다!" });
      router.push("/mypage/market");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  // 좋아요
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query._id },
      });
      props.refetch();
    } catch (error) {
      alert((error as Error).message);
    }
  };

  //장바구니
  const onClickBasket = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter(
      (basketsEl: any) => basketsEl._id === props.data?.fetchUseditem._id
    );

    Modal.success({ content: "장바구니에 물품이 담겼습니다!" });

    if (temp.length === 1) {
      Modal.error({
        content: "이미 장바구니에 담긴 물품입니다.",
      });
      return;
    }

    const { __typename, ...newEl } = props.data?.fetchUseditem;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setBasketItems(baskets);
  };

  const onClickEdit = () => {
    router.push(`/market/${router.query._id}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query._id },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({ content: "삭제가 완료되었습니다!" });
      router.push("/market");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  // 지도
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=105d9e45b37b65e70dd1d31a18e23d78&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.3949, 127.1112),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래위치</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, []);

  return (
    <>
      <MarketDetailPresenter
        data={props.data}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        onClickBuy={onClickBuy}
        onClickPick={onClickPick}
        onClickBasket={onClickBasket}
      />
    </>
  );
}
