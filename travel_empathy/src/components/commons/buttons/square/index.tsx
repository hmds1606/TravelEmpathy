import styled from "@emotion/styled";

interface IIsActiveProps {
  isActive?: boolean;
}

const Button = styled.button`
  width: 250px;
  height: 50px;
  font-weight: 500;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background-color: ${(props: IIsActiveProps) =>
    props.isActive ? "#EF9F9F90" : "#bdbdbd"};
`;

interface ISquareButtonProps {
  isActive?: boolean;
  title: string;
  onClick?: () => void;
}

export default function SquareButton(props: ISquareButtonProps) {
  return (
    <Button isActive={props.isActive} type="button" onClick={props.onClick}>
      {props.title}
    </Button>
  );
}
