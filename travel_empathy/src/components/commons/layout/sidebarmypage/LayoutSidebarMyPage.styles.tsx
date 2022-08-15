import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 30%;
  padding-left: 8em;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 2em;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;
`;

export const UserName = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 2em;
  border-bottom: 4px solid #bdbdbd;
  padding-bottom: 0.2em;
`;

export const MyPoint = styled.p`
  margin: 1em 0em 0.5em 0em;
  font-size: 1.2em;
  font-weight: 500;
  color: #354259;
`;

export const Menu = styled.div`
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;

  @media ${breakPoints.mobile} {
    height: 10em;
  }
`;

interface IIsActiveProps {
  isActive: boolean;
}

export const MenuTitle = styled.li`
  font-size: 1.3em;
  cursor: pointer;

  font-weight: ${(props: IIsActiveProps) => (props.isActive ? "700" : "400")};
  color: ${(props: IIsActiveProps) => (props.isActive ? "#354259" : "#000000")};
`;
