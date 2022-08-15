import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../../../commons/styles/media";

const ButtonBox = styled.div`
  @media ${breakPoints.mobile} {
    z-index: 999;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 1em;
    transform: translate(-20%, -20%);
    border: none;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    right: 0.2em;
  }
`;

const Button = styled.button`
  @media ${breakPoints.mobile} {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background-color: #354259;
  }
`;

export default function MobileCreateButton() {
  const router = useRouter();

  const onClickCreate = () => {
    router.push("/board/new");
  };

  return (
    <ButtonBox>
      <Button onClick={onClickCreate}>🖍</Button>
    </ButtonBox>
  );
}
