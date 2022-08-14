import { Badge } from "antd";
import Link from "next/link";
import {
  Wrapper,
  InnerButton,
  ButtonBox,
  LogoBox,
  Logo,
  Point,
} from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <Wrapper>
      <LogoBox>
        <Logo src="/img/로고.png" onClick={props.onClickMainLogo} />
      </LogoBox>

      <ButtonBox>
        <InnerButton onClick={props.onClickLogin}>
          {props.data?.fetchUserLoggedIn
            ? `${props.data?.fetchUserLoggedIn.name} 님`
            : "로그인"}
        </InnerButton>
        <InnerButton onClick={props.onClickJoinLogout}>
          {props.data?.fetchUserLoggedIn ? "로그아웃" : "회원가입"}
        </InnerButton>
        <InnerButton onClick={props.onClickBasket}>장바구니</InnerButton>
        {props.data?.fetchUserLoggedIn ? (
          <a href="#">
            <Badge count={props.basketItems.length}></Badge>
          </a>
        ) : (
          ""
        )}
      </ButtonBox>
    </Wrapper>
  );
}
