import SquareButton from "../../../commons/buttons/square";
import BorderInput from "../../../commons/inputs/borderinput";
import NewPageHalfInput from "../../../commons/inputs/newpagehalfinput";
import NewPageInput from "../../../commons/inputs/newpageinput";
import * as F from "./MarketNew.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import BorderInputReadOnly from "../../../commons/inputs/borderinput_readOnly";
import { v4 as uuidv4 } from "uuid";
import Upload01Container from "../../../commons/uploads/01/Uploads01.container";
import Tag from "../../../commons/tag/tag";
import { breakPoints } from "../../../../commons/styles/media";
import { IMarketNewPresenterProps } from "./MarketNew.types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const MyQuill = styled(ReactQuill)`
  .ql-toolbar.ql-snow {
    width: 112.5%;
  }

  .ql-container.ql-snow {
    width: 112.5%;
    height: 309.75px;
    border: 1px solid #bdbdbd;
  }

  @media ${breakPoints.mobile} {
    .ql-toolbar.ql-snow {
      width: 100%;
    }

    .ql-container.ql-snow {
      width: 100%;
      height: 309.75px;
      border: 1px solid #bdbdbd;
    }
  }
`;

export default function MarketNewPresenter(props: IMarketNewPresenterProps) {
  return (
    <F.Container>
      <F.Wrapper>
        <F.Title>{props.isEdit ? "중고상품 수정" : "중고상품 등록"}</F.Title>
        <form
          onSubmit={() => {
            "return false";
          }}
        >
          <F.WriterPWBox>
            <div>
              <F.Name>상품명</F.Name>
              <F.NameInputBox>
                <NewPageHalfInput
                  type="text"
                  placeholder="상품명을 입력해주세요."
                  register={props.register("name")}
                  defaultValue={props.marketData?.fetchUseditem.name}
                />
                <F.Errors>{props.formState.errors.name?.message}</F.Errors>
              </F.NameInputBox>
            </div>
            <div>
              <F.Name>판매가격</F.Name>
              <F.NameInputBox>
                <NewPageHalfInput
                  type="text"
                  placeholder="판매가격을 입력해주세요."
                  register={props.register("price")}
                  defaultValue={props.marketData?.fetchUseditem.price}
                />
                <F.Errors>{props.formState.errors.price?.message}</F.Errors>
              </F.NameInputBox>
            </div>
          </F.WriterPWBox>

          <F.InputInfo>
            <F.SubTitle>한줄요약</F.SubTitle>
            <F.NameInputBox>
              <NewPageInput
                type="text"
                placeholder="판매할 상품을 한줄로 표현해주세요."
                register={props.register("remarks")}
                defaultValue={props.marketData?.fetchUseditem.remarks}
              />

              <F.Errors>{props.formState.errors.remarks?.message}</F.Errors>
            </F.NameInputBox>
          </F.InputInfo>

          <F.InputInfo>
            <F.SubTitle>내용</F.SubTitle>
            <F.NameInputBox>
              <MyQuill
                style={{ height: "100%" }}
                placeholder="내용을 입력해주세요."
                onChange={props.onChangeContents}
                defaultValue={props.marketData?.fetchUseditem.contents}
              />
              <F.Tag>
                <Tag
                  tagItem={props.tagItem}
                  setTagItem={props.setTagItem}
                  tagList={props.tagList}
                  setTagList={props.setTagList}
                  marketData={props.marketData}
                  register={props.register("tags")}
                />
              </F.Tag>
              <F.Errors>{props.formState.errors.contents?.message}</F.Errors>

              <F.ImgWrapper>
                {props.imageUrl.map((el, index) => (
                  <Upload01Container
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeImageUrls={props.onChangeImageUrls} //Upload01Container로 넘겨주기 위한 props
                  />
                ))}
              </F.ImgWrapper>
            </F.NameInputBox>
          </F.InputInfo>

          <F.InputInfo>
            <F.SubTitle>거래위치</F.SubTitle>
            <F.LocationBox>
              <F.Map id="map" />
              <F.Location>
                <F.latlng>위도: {props.lat} </F.latlng>
                <F.latlng>경도: {props.lng}</F.latlng>
                <BorderInputReadOnly
                  placeholder="지도에 위치를 클릭하면 주소가 나옵니다."
                  register={props.register("address")}
                  defaultValue={
                    props.marketData?.fetchUseditem.useditemAddress.address ||
                    ""
                  }
                />
                <BorderInput
                  placeholder="상세위치를 직접 입력해주세요(ex.학교 앞)"
                  register={props.register("addressDetail")}
                  defaultValue={
                    props.marketData?.fetchUseditem.useditemAddress
                      .addressDetail
                  }
                />
              </F.Location>
            </F.LocationBox>
          </F.InputInfo>

          <F.SubmitButtonBox>
            <SquareButton
              isActive={props.formState.isValid}
              title={props.isEdit ? "수정하기" : "등록하기"}
              onClick={props.handleSubmit(
                props.isEdit ? props.onClickUpdate : props.onClickSubmit
              )}
            />
          </F.SubmitButtonBox>
        </form>
      </F.Wrapper>
    </F.Container>
  );
}
