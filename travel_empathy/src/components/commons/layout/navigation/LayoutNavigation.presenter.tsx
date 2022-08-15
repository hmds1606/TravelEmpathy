import { Fragment } from "react";
import { Wrapper, MenuItem } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  // { name: "오늘의기분", page: "/feel" },
  { name: "환율정보", page: "/money" },
  { name: "자유게시판", page: "/board" },
  { name: "중고마켓", page: "/market" },
  { name: "마이페이지", page: "/mypage/market" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <>
      <Wrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <MenuItem
              id={el.page}
              onClick={props.onClickMenu}
              isActive={el.page === props.activedMenu}
            >
              {el.name}
            </MenuItem>
          </Fragment>
        ))}
      </Wrapper>
    </>
  );
}
