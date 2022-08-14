import { getDate } from "../../../../commons/libraries/date";
import * as F from "./Market.styles";
import { IMarketPresenterPageProps } from "./Market.types";
import MenuTabs from "./markettabs/Tabs";

export default function MarketPresenterPage(props: IMarketPresenterPageProps) {
  return (
    <F.Right>
      <MenuTabs onChangeKey={props.onChangeKey} />
      {props.tabKey === "1" && (
        <div>
          <F.TitleRow>
            <F.MyColumn>번호</F.MyColumn>
            <F.MyProduct>상품명</F.MyProduct>
            <F.MyColumn>가격</F.MyColumn>
            <F.MyColumn>날짜</F.MyColumn>
          </F.TitleRow>
          {props.isoldData?.fetchUseditemsISold.map(
            (el: any, index: number) => (
              <F.MyRow key={index}>
                <F.MyColumn>{index + 1}</F.MyColumn>
                <F.MyProduct>{el.name}</F.MyProduct>
                <F.MyColumn>{el.price.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.createdAt.split("T")[0]}</F.MyColumn>
              </F.MyRow>
            )
          )}
        </div>
      )}

      {props.tabKey === "2" && (
        <div>
          <F.TitleRow>
            <F.MyColumn>번호</F.MyColumn>
            <F.MyProduct>상품명</F.MyProduct>
            <F.MyColumn>가격</F.MyColumn>
            <F.MyColumn>날짜</F.MyColumn>
          </F.TitleRow>
          {props.ipickedData?.fetchUseditemsIPicked.map(
            (el: any, index: number) => (
              <F.MyRow key={index}>
                <F.MyColumn>{index + 1}</F.MyColumn>
                <F.MyProduct>{el.name} </F.MyProduct>
                <F.MyColumn>{el.price.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.createdAt.split("T")[0]}</F.MyColumn>
              </F.MyRow>
            )
          )}
        </div>
      )}

      {props.tabKey === "3" && (
        <div>
          <F.TitleRow>
            <F.MyColumn>번호</F.MyColumn>
            <F.MyProduct>구매한 상품명</F.MyProduct>
            <F.MyColumn>차감 포인트</F.MyColumn>
            <F.MyColumn>잔여 포인트</F.MyColumn>
            <F.MyColumn>날짜</F.MyColumn>
          </F.TitleRow>
          {props.buyingPointData?.fetchPointTransactionsOfBuying.map(
            (el: any, index: number) => (
              <F.MyRow key={index}>
                <F.MyColumn>{index + 1}</F.MyColumn>
                <F.MyProduct>{el.useditem.name}</F.MyProduct>
                <F.MyColumn>{el.amount.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.balance.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.createdAt.split("T")[0]}</F.MyColumn>
              </F.MyRow>
            )
          )}
        </div>
      )}

      {props.tabKey === "4" && (
        <div>
          <F.TitleRow>
            <F.MyColumn>번호</F.MyColumn>
            <F.MyProduct>판매된 상품명</F.MyProduct>
            <F.MyColumn>추가 포인트</F.MyColumn>
            <F.MyColumn>잔여 포인트</F.MyColumn>
            <F.MyColumn>날짜</F.MyColumn>
          </F.TitleRow>
          {props.sellingPointDdata?.fetchPointTransactionsOfSelling.map(
            (el: any, index: number) => (
              <F.MyRow key={index}>
                <F.MyColumn>{index + 1}</F.MyColumn>
                <F.MyProduct>{el.useditem.name}</F.MyProduct>
                <F.MyColumn>+{el.amount.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.balance.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.useditem.soldAt.split("T")[0]}</F.MyColumn>
              </F.MyRow>
            )
          )}
        </div>
      )}
    </F.Right>
  );
}
