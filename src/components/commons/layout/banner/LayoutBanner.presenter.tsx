import { Wrapper, Picture, StyledSlider } from "./LayoutBanner.styles";
import * as F from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(props: ILayoutBannerUIProps) {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: true,
  };

  return (
    <F.Wrapper>
      <F.StyledSlider {...settings}>
        <F.Picture src="/img/banner/여행가방.png" onClick={props.onClickBag} />
        <F.Picture src="/img/banner/제주도.png" onClick={props.onClickJeju} />
        <F.Picture src="/img/banner/맛집.png" onClick={props.onClickFood} />
      </F.StyledSlider>
    </F.Wrapper>
  );
}
