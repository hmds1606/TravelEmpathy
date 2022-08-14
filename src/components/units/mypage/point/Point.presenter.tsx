import { getDate } from "../../../../commons/libraries/date";
import * as F from "./Point.styles";
import { IPointPresenterPageProps } from "./Point.types";
import MenuTabs from "./pointtabs/Tabs";

export default function PointPresenterPage(props: IPointPresenterPageProps) {
  return (
    <F.Right>
      <MenuTabs onChangeKey={props.onChangeKey} />
      {props.tabKey === "1" && (
        <div>
          <F.TitleRow>
            <F.MyColumn>번호</F.MyColumn>
            <F.MyColumn>구매/판매 상태</F.MyColumn>
            <F.MyColumn>구매/판매 포인트</F.MyColumn>
            <F.MyColumn>잔여 포인트</F.MyColumn>
            <F.MyColumn>날짜</F.MyColumn>
          </F.TitleRow>
          {props.totalPointData?.fetchPointTransactions.map(
            (el: any, index: number) => (
              <F.MyRow key={index}>
                <F.MyColumn>{index + 1}</F.MyColumn>
                <F.MyColumn>{el.status}</F.MyColumn>
                <F.MyColumn>{el.amount.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.balance.toLocaleString()} 원</F.MyColumn>
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
            <F.MyColumn>충전 아이디</F.MyColumn>
            <F.MyColumn>충전 포인트</F.MyColumn>
            <F.MyColumn>날짜</F.MyColumn>
          </F.TitleRow>
          {props.addPointData?.fetchPointTransactionsOfLoading.map(
            (el: any, index: number) => (
              <F.MyRow key={index}>
                <F.MyColumn>{index + 1}</F.MyColumn>
                <F.MyColumn>{el.impUid}</F.MyColumn>
                <F.MyColumn>+{el.amount.toLocaleString()} 원</F.MyColumn>
                <F.MyColumn>{el.createdAt.split("T")[0]}</F.MyColumn>
              </F.MyRow>
            )
          )}
        </div>
      )}
    </F.Right>
  );
}
