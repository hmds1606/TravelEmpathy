import styled from "@emotion/styled";

export const Textarea = styled.textarea`
  width: 920px;
  height: 300px;
  border: 1px solid #cdc2ae;
  padding: 10px;
`;

interface IContentsTextareaProps {
  type: string;
  placeholder: string;
  register: string;
}

export default function ContentsTextarea(props: IContentsTextareaProps) {
  return (
    <Textarea
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
