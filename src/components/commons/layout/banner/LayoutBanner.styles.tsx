import styled from "@emotion/styled";
import Slider from "react-slick";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 90vh; */
  height: 35em;

  @media ${breakPoints.mobile} {
    height: 20em;
  }
`;

// export const Picture1 = styled.div`
//   /* width: 1100px !important; */
//   height: 700px;
//   background-position: center;
//   cursor: pointer;
//   background-image: url("/pictures/solo.jpg");
//   background-size: cover;
//   /* margin-left: calc((100vw - 1100px) / 2); */
// `;

export const Picture = styled.img`
  /* height: 90vh; */
  height: 35em;

  object-fit: cover;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    height: 20em;
  }
`;

export const StyledSlider = styled(Slider)`
  /* height: 90vh; */
  height: 35em;

  .slick-dots {
    bottom: 40px;
  }

  /*화살표 크기*/
  .slick-prev:before,
  .slick-next:before {
    font-size: 60px;
  }

  .slick-prev {
    left: 10%; /*위치*/
    z-index: 999;
  }

  .slick-next {
    right: 10%; /*위치*/
  }

  @media ${breakPoints.mobile} {
    height: 20em;

    .slick-dots {
      bottom: 20px;
    }

    .slick-prev:before,
    .slick-next:before {
      font-size: 0px;
    }
  }
`;
