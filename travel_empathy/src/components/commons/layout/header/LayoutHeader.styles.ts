import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  height: 6em;
  background-color: white;
  padding: 0em 8em;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding: 0em 2em;
  }
`;

export const Logo = styled.img`
  width: 11em;
  height: 4.5em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 8em;
    height: 3.5em;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InnerLogo = styled.h1`
  margin-bottom: 0px;
  font-size: 2em;
  font-weight: 900;
  color: black;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const ButtonBox = styled.div`
  width: 18em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 13em;
  }
`;

export const InnerButton = styled.p`
  margin-bottom: 0px;
  font-size: 1.3em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const Point = styled.div``;
