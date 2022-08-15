import LayoutFooter from "./footer";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutSidebar from "./sidebar/LayoutSidebar.container";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";
import LayoutSidebarMyPageContainer from "./sidebarmypage/LayoutSidebarMyPage.container";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const BodyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 0em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  @media ${breakPoints.mobile} {
    padding: 0me;
  }
`;

const HIDDEN_NAVIGATION = ["/", "/login", "/join"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_BANNER = [
    "/login",
    "/join",
    "/market",
    "/market/new",
    "/market/" + router.query._id,
    "/market/" + router.query._id + "/edit",
    "/mypage",
    "/mypage/market",
    "/mypage/point",
    "/mypage/passwordedit",
    "/mypage/basket",
    "/board/new",
  ];

  const HIDDEN_SIDEBAR = [
    "/login",
    "/join",
    "/board",
    "/board/" + router.query._id,
    "/board/" + router.query._id + "/edit",
    "/",
    "/money",
    "/board/new",
    "/board/fixedinfo/jeju",
    "/board/fixedinfo/food",
    "/board/fixedinfo/bag",
  ];

  const HIDDEN_SIDEBAR_MYPAGE = [
    "/",
    "/login",
    "/join",
    "/money",
    "/board",
    "/board/new",
    "/board/" + router.query._id,
    "/board/" + router.query._id + "/edit",
    "/market",
    "/market/new",
    "/market/" + router.query._id,
    "/market/" + router.query._id + "/edit",
    "/board/fixedinfo/jeju",
    "/board/fixedinfo/food",
    "/board/fixedinfo/bag",
  ];

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  const isHiddenSidebarMypage = HIDDEN_SIDEBAR_MYPAGE.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);

  return (
    <Wrapper>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      {!isHiddenNavigation && <LayoutNavigation />}

      <BodyBox>
        {!isHiddenSidebarMypage && <LayoutSidebarMyPageContainer />}
        <Body>{props.children}</Body>
        {!isHiddenSidebar && <LayoutSidebar />}
      </BodyBox>
      <LayoutFooter />
    </Wrapper>
  );
}
