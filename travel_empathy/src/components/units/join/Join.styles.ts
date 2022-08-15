import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Background = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url("/img/sky.png");
  background-size: cover;
  background-position: bottom;
  padding: 4em 0em;

  @media ${breakPoints.mobile} {
    height: 48em;
  }
`;

export const Wrapper = styled.section`
  width: 37em;
  height: 100%;
  background-color: #ffffffaa;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    width: 22em;
    height: 40em;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0em;
  font-weight: 900;
  font-size: 2.5em;

  @media ${breakPoints.mobile} {
    font-size: 2.2em;
    margin-bottom: 0.8em;
  }
`;

export const ContentsBox = styled.div`
  width: 30em;
  height: 28em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 22em;
    height: 23em;
  }
`;

export const ContentsInnerBox = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Error = styled.p`
  margin-bottom: 0em;
  height: 20px;
  color: red;
  font-size: 0.8em;
  font-weight: 500;
  padding-top: 0.5em;
`;

export const ContentsTitle = styled.p`
  margin-bottom: 0em;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
