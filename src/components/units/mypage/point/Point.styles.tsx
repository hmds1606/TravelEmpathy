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
  width: 25%; //부모박스의 가로사이즈를 4분의 1값씩(25%) 나눠갖는거!
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid #bdbdbd;
  font-size: 1.3em;

  @media ${breakPoints.mobile} {
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
