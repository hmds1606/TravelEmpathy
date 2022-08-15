import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const NewHalfInput = styled.input`
  height: 50px;
  border: 1px solid #bdbdbd;
  padding: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

interface INewPageHalfInputProps {
  type: string;
  placeholder?: string;
  register?: any;
  defaultValue?: string;
  readOnly?: any;
}

export default function NewPageHalfInput(props: INewPageHalfInputProps) {
  return (
    <NewHalfInput
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
    />
  );
}
