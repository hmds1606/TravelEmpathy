import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import LayoutSidebarMyPagePresenter from "./LayoutSidebarMyPage.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_USER_LOGGED_IN,
} from "./LayoutSidebarMyPage.queries";

export default function LayoutSidebarMyPageContainer() {
  const router = useRouter();

  const [activedMenu, setActivedMenu] = useState("");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = (event.target as HTMLDivElement).id;
      setActivedMenu(activedMenu);
    }
  };

  const { data: fetchUserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: fetchPointTransactions } = useQuery(FETCH_POINT_TRANSACTIONS);

  return (
    <LayoutSidebarMyPagePresenter
      onClickMenu={onClickMenu}
      activedMenu={activedMenu}
      userData={fetchUserLoggedIn}
      totalPointData={fetchPointTransactions}
    />
  );
}
