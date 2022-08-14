import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #00000050;
  background-color: ${(props) => (props.isActive ? "#EF9F9F90" : "#bdbdbd")};
  margin-top: 20px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 18em;
  }
`;

interface IStandardButtonProps {
  isActive: any;
  title: string;
}

export default function StandardButton(props: IStandardButtonProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
