import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const NewInput = styled.input`
  width: 112.5%;
  height: 50px;
  padding: 10px;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

interface INewPageInputProps {
  type: string;
  placeholder: string;
  register: string;
  defaultValue: string;
}

export default function NewPageInput(props: INewPageInputProps) {
  return (
    <NewInput
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
      defaultValue={props.defaultValue}
    />
  );
}
