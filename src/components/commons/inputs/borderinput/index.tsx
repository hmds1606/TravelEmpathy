import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: none;
  border-bottom: 2px solid #bdbdbd;
  background-color: transparent;
  margin-top: 10px;
  outline: none;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

interface IBorderInputProps {
  type?: string;
  placeholder?: string;
  register?: any;
  defaultValue?: string;
}

export default function BorderInput(props: IBorderInputProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
      defaultValue={props.defaultValue}
    />
  );
}
