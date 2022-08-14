import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const UploadBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    margin-right: 5px;
  }
`;

export const File = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 24px;
  margin-top: 20px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    margin-top: 0px;
    margin-right: 5px;
  }
`;
