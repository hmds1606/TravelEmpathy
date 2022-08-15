import styled from "@emotion/styled";

const PasswordEdit = styled.input`
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;

interface IPasswordEditInputProps {
  type?: string;
  placeholder?: string;
  register?: any;
}

export default function PasswordEditInput(props: IPasswordEditInputProps) {
  return (
    <PasswordEdit
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
