import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 0em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;
export const DateKRWBox = styled.div`
  width: 60%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1em;
  }
`;

export const Date = styled.p`
  margin-bottom: 0em;
  font-size: 1.3em;
  font-weight: 400;
`;

export const KRW = styled.p`
  margin-bottom: 0em;
  font-size: 1.3em;
  font-weight: 400;
`;

export const TotalBox = styled.div`
  width: 60%;
  height: 33em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 70em;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-top: 1px dotted gray;
  border-bottom: 1px dotted gray;
  padding: 0px 0px 0px 15px;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0em;
  }
`;

export const Country = styled.p`
  margin-bottom: 0em;
  font-size: 1.3em;
`;
