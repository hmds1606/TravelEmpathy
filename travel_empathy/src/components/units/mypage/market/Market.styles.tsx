import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Right = styled.div`
  width: 100%;
`;

export const TitleRow = styled.div`
  display: flex;
  width: 100%;
  height: 3em;
  background-color: #354259;
  color: #ffffff;
`;

export const MyColumn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid #bdbdbd;
  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    width: 25%;
    font-size: 1em;
  }
`;

export const MyProduct = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid #bdbdbd;
  font-size: 1.3em;
  overflow: hidden;

  @media ${breakPoints.mobile} {
    width: 25%;
    font-size: 1em;
  }
`;

export const MyRow = styled.div`
  display: flex;
  width: 100%;
  height: 3em;
  :hover {
    cursor: pointer;
  }
`;
