import styled from "@emotion/styled";
import { breakPoints } from "../../../../src/commons/styles/media";

const Wrapper = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 0em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;

  @media ${breakPoints.mobile} {
    font-size: 25px;
  }
`;

const Picture = styled.img`
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export default function SoloPage() {
  return (
    <>
      <Wrapper>
        <Title>휴게소 맛집 추천</Title>
        <Picture src="/img/board/휴게소.jpeg" />
      </Wrapper>
    </>
  );
}
