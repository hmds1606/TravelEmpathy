import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  font-size: 0.4em;
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "pink" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};

  @media ${breakPoints.mobile} {
    margin: 0em 0.5em;
  }
`;
