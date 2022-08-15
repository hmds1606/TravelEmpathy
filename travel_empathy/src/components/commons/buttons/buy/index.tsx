import styled from "@emotion/styled";

const Button = styled.button`
  width: 480px;
  height: 50px;
  :hover {
    background-color: #ef9f9f90;
  }
`;

export default function BuyButton(props: any) {
  return <Button>{props.title}</Button>;
}
