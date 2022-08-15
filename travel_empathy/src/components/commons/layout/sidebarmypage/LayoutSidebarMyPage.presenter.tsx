import * as F from "./LayoutSidebarMyPage.styles";
import Link from "next/link";
import PaymentPage from "../../payment/payment";
import {
  ILayoutSidebarMyPagePresenterProps,
  IMenuEl,
} from "./LayoutSidebarMyPage.types";

const NAVIGATION_MENUS = [
  { name: "중고마켓 이용내역", page: "/mypage/market" },
  { name: "포인트 이용내역", page: "/mypage/point" },
  { name: "비밀번호 변경", page: "/mypage/passwordedit" },
];

export default function LayoutSidebarMyPagePresenter(
  props: ILayoutSidebarMyPagePresenterProps
) {
  return (
    <F.Wrapper>
      <F.Title>MY PAGE</F.Title>
      <F.UserName>{props.userData?.fetchUserLoggedIn.name} 님</F.UserName>

      <F.MyPoint>
        잔여 포인트:{" "}
        {props.totalPointData?.fetchPointTransactions[0].balance.toLocaleString() ||
          "0"}{" "}
        원
      </F.MyPoint>

      <PaymentPage />

      <F.Menu>
        {NAVIGATION_MENUS.map((el: IMenuEl) => (
          <div key={el.page}>
            <Link href={el.page}>
              <F.MenuTitle
                id={el.page}
                onClick={props.onClickMenu}
                isActive={el.page === props.activedMenu}
              >
                {el.name}
              </F.MenuTitle>
            </Link>
          </div>
        ))}
      </F.Menu>
    </F.Wrapper>
  );
}
