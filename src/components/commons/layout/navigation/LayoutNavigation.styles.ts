import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  height: 100px;
  background-color: white;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

interface IIsActiveProps {
  isActive: boolean;
}

export const MenuItem = styled.p`
  margin: 0em 2em 0em 2em;
  font-weight: 700;
  font-size: 1.2em;
  cursor: pointer;

  color: ${(props: IIsActiveProps) => (props.isActive ? "#6E85B7" : "#000000")};

  @media ${breakPoints.mobile} {
    margin: 0em 1em 0em 1em;
    font-size: 0.8em;
  }
`;
