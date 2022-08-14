import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Background = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url("/img/sky.png");
  background-size: cover;
  background-position: center;
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
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    width: 22em;
    height: 40em;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleIcon = styled.img`
  width: 12em;
  height: 5em;

  @media ${breakPoints.mobile} {
    width: 10em;
    height: 4em;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0em;
  font-weight: 900;
  font-size: 2.5em;
`;

export const ContentsBox = styled.div`
  width: 30em;
  height: 12em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 10em;
  }
`;

export const ContentsInnerBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentsIcon = styled.img`
  width: 2.9em;
  height: 2.7em;
  padding: 5px;
  align-self: center;
`;

export const Error = styled.p`
  height: 2em;
  color: red;
  font-size: 0.8em;
  padding: 0.5em 0em 0em 4em;
  margin-bottom: 0em;
  font-weight: 500;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 10em;
  }
`;

export const Footer = styled.div`
  width: 30em;
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 20em;
  }
`;

export const FooterContentsBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Question = styled.p`
  margin-bottom: 0em;
  font-size: 1em;
`;

export const Answer = styled.p`
  margin-bottom: 0em;
  padding-left: 10px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 500;
`;
