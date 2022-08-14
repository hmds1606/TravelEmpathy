import { getDate } from "../../../../commons/libraries/date";
import * as F from "./MarketDetail.styles";
import Dompurify from "dompurify";
import { Image } from "antd";
import { IMarketDetailPresenterProps } from "./MarketDetail.types";

export default function MarketDetailPresenter(
  props: IMarketDetailPresenterProps
) {
  return (
    <F.Container>
      <F.Wrapper>
        <F.Header>
          <F.InfoBox>
            <F.InfoNameDate>
              <F.InfoName>{props.data?.fetchUseditem.seller.name}</F.InfoName>
              <F.InfoDate>
                {getDate(props.data?.fetchUseditem.createdAt)}
              </F.InfoDate>
            </F.InfoNameDate>
          </F.InfoBox>
        </F.Header>

        <F.ProductBox>
          <F.ProductImage>
            {props.data?.fetchUseditem.images[0] ? (
              <Image
                style={{ height: "300px" }}
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
            ) : (
              <F.NoImage src="/NoImage.png" />
            )}
          </F.ProductImage>
          <F.ProductInfo>
            <F.ProductName>{props.data?.fetchUseditem.name}</F.ProductName>
            <F.Price>
              {props.data?.fetchUseditem.price.toLocaleString()} 원
            </F.Price>
            <F.TagLikeBox>
              <F.Tag>
                {props.data?.fetchUseditem.tags.map(
                  (el: any, index: number) => (
                    <F.Tags key={index}># {el}</F.Tags>
                  )
                )}
              </F.Tag>
              <F.LikeBox>
                <F.LikeIcon onClick={props.onClickPick}>❤️</F.LikeIcon>
                <F.LikeCount>
                  {props.data?.fetchUseditem.pickedCount}
                </F.LikeCount>
              </F.LikeBox>
            </F.TagLikeBox>
            <F.ButtonBox>
              <F.BasketButton onClick={props.onClickBasket}>
                장바구니
              </F.BasketButton>
              <F.BuyButton onClick={props.onClickBuy}>구매하기</F.BuyButton>
            </F.ButtonBox>
          </F.ProductInfo>
        </F.ProductBox>

        <F.Summary>{props.data?.fetchUseditem.remarks}</F.Summary>

        <F.ContentsImage>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el !== "")
            .map((el: string) => (
              <Image
                style={{ height: "300px" }}
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </F.ContentsImage>
        {typeof window !== "undefined" ? (
          <F.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></F.Contents>
        ) : (
          <F.Contents />
        )}

        <F.LocationBox>
          <F.Location id="map"></F.Location>
          <F.LocationDetailBox>
            <F.LocationDetail>
              {props.data?.fetchUseditem.useditemAddress?.address}
            </F.LocationDetail>
            <F.LocationDetail>
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </F.LocationDetail>
          </F.LocationDetailBox>
        </F.LocationBox>
        <F.PutterButtonBox>
          <F.Button onClick={props.onClickEdit}>수정하기</F.Button>
          <F.Button onClick={props.onClickDelete}>삭제하기</F.Button>
        </F.PutterButtonBox>
      </F.Wrapper>
    </F.Container>
  );
}
