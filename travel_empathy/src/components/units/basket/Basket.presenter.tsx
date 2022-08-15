import * as F from "./Basket.styles";
import { IBasketItemsProps, IBasketPresenterPageProps } from "./Basket.types";

export default function BasketPresenterPage(props: IBasketPresenterPageProps) {
  return (
    <F.Wrapper>
      <F.Title>장바구니</F.Title>

      <div>
        {props.basketItems.map((el: IBasketItemsProps, index: number) => (
          <F.MyKey key={el._id} id={el._id} onClick={props.onClickRow}>
            <F.MyContents>{index + 1}</F.MyContents>
            <F.TodayPicture>
              {el.images[0] ? (
                <F.MiniPicture
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <F.TodayNoImageBox>
                  <F.TodayNoImage src="/NoImage.png" />
                </F.TodayNoImageBox>
              )}
            </F.TodayPicture>
            <F.MyContents>{el.name}</F.MyContents>
            <F.MyContents>{el.price.toLocaleString()} 원</F.MyContents>
          </F.MyKey>
        ))}
      </div>
      <F.Notice>* 상세페이지에 들어가서 구매가 가능합니다</F.Notice>
    </F.Wrapper>
  );
}
