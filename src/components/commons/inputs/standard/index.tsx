import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Input = styled.input`
  width: 350px;
  height: 3.5em;
  padding-left: 10px;
  border: 0px;
  background-color: #bdbdbd80;

  @media ${breakPoints.mobile} {
    width: 15em;
    height: 2.7em;
  }
`;

interface IStandardInputProps {
  type: string;
  placeholder?: string;
  register?: any;
}

export default function StandardInput(props: IStandardInputProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
