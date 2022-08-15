import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface IStandardButtonProps {
  isActive: any;
  title: string;
}

const Button = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #00000050;
  background-color: ${(props: IStandardButtonProps) =>
    props.isActive ? "#EF9F9F90" : "#bdbdbd"};
  margin-top: 20px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 18em;
  }
`;

export default function StandardButton(props: IStandardButtonProps) {
  return (
    <Button isActive={props.isActive} title={""}>
      {props.title}
    </Button>
  );
}
