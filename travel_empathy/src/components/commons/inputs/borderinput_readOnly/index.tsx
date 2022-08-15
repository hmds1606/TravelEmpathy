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

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

interface IBorderInputReadOnlyProps {
  type?: string;
  placeholder?: string;
  register?: any;
  defaultValue?: string;
  readOnly?: any;
}

export default function BorderInputReadOnly(props: IBorderInputReadOnlyProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
      readOnly
      defaultValue={props.defaultValue}
    />
  );
}
