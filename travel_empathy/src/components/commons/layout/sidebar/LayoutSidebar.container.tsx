import { useRouter } from "next/router";
import LayoutSidebarPresenter from "./LayoutSidebar.presenter";
import { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { todayState } from "../../../../commons/global-state";

export default function LayoutSidebarContainer() {
  const router = useRouter();

  const [today, setToday] = useRecoilState(todayState);

  const onClickRow = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event?.currentTarget.id}`);
  };

  useEffect(() => {
    const temp = JSON.parse(sessionStorage.getItem("today") || "[]");
    setToday(temp);
  }, []);

  return <LayoutSidebarPresenter onClickRow={onClickRow} today={today} />;
}
