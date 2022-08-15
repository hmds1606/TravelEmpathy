import { useRouter } from "next/router";
import LayoutBannerUI from "./LayoutBanner.presenter";

export default function LayoutBanner() {
  const router = useRouter();

  const onClickBag = () => {
    router.push("/board/fixedinfo/bag");
  };

  const onClickJeju = () => {
    router.push("/board/fixedinfo/jeju");
  };

  const onClickFood = () => {
    router.push("/board/fixedinfo/food");
  };

  return (
    <LayoutBannerUI
      onClickBag={onClickBag}
      onClickJeju={onClickJeju}
      onClickFood={onClickFood}
    />
  );
}
