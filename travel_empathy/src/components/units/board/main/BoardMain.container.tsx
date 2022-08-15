import { useRouter } from "next/router";
import MainPagePresenter from "./BoardMain.presenter";

export default function MainPageContainer() {
  const router = useRouter();

  const onClickMoney = () => {
    router.push("/money");
  };

  const onClickFree = () => {
    router.push("/board");
  };

  const onClickMarket = () => {
    router.push("/market");
  };

  const onClickMyPage = () => {
    router.push("/mypage/market");
  };

  return (
    <>
      <MainPagePresenter
        onClickMoney={onClickMoney}
        onClickFree={onClickFree}
        onClickMarket={onClickMarket}
        onClickMyPage={onClickMyPage}
      />
    </>
  );
}
