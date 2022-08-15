import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.section`
  width: 100%;
  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1em 2em;
  background-color: #354259;
  color: white;
  font-weight: 600;
  bottom: 0;
`;

const Address = styled.p`
  font-size: 1.5em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

const Contents = styled.p`
  margin-bottom: 0em;
  color: #a3a8b7;

  @media ${breakPoints.mobile} {
    font-size: 0.9em;
  }
`;

export default function LayoutFooter() {
  const router = useRouter();

  const onClickAddress = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <Address onClick={onClickAddress}>프로여행러들의 공감 커뮤니티</Address>
      <Contents>대표자: 이영주</Contents>
      <ContentsBox>
        <Contents>문의전화: 02-1234-5678</Contents>
        <Contents>https://gotrevel.netlify.app/</Contents>
      </ContentsBox>
    </Wrapper>
  );
}
