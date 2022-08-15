import * as F from "./BoardMain.styles";
import { IMainPagePresenterProps } from "./BoardMain.types";

export default function MainPagePresenter(props: IMainPagePresenterProps) {
  return (
    <F.Wrapper>
      <F.Title>프로여행러들의</F.Title>
      <F.Title>공감 커뮤니티</F.Title>
      <F.SubTitle>환율정보부터 중고상품 구매까지</F.SubTitle>

      <F.InfoBox>
        <F.MoneyBox onClick={props.onClickMoney}>
          <F.Img src="/img/landing/돈1.png" />
          <div>
            <F.MoveTitle>환율정보</F.MoveTitle>
            <F.ContentsBox>
              <F.Contents1>여행의 시작은 환전</F.Contents1>
              <F.Contents2>오늘의 환율 알아보기</F.Contents2>
            </F.ContentsBox>
          </div>
        </F.MoneyBox>
        <F.FreeBox onClick={props.onClickFree}>
          <F.Img src="/img/landing/이야기1.png" />
          <div>
            <F.MoveTitle>자유게시판</F.MoveTitle>
            <F.ContentsBox>
              <F.Contents1>무엇이든 물어보세요</F.Contents1>
              <F.Contents2>여행친구찾기? 장소추천?</F.Contents2>
            </F.ContentsBox>
          </div>
        </F.FreeBox>
        <F.MarketBox onClick={props.onClickMarket}>
          <F.Img src="/img/landing/거래.png" />
          <div>
            <F.MoveTitle>중고마켓</F.MoveTitle>
            <F.ContentsBox>
              <F.Contents1>여행템 모아모아</F.Contents1>
              <F.Contents2>빨리 안사면 품절이에요</F.Contents2>
            </F.ContentsBox>
          </div>
        </F.MarketBox>
        <F.MyPage onClick={props.onClickMyPage}>
          <F.Img src="/img/landing/프로필.png" />
          <div>
            <F.MoveTitle>마이페이지</F.MoveTitle>
            <F.ContentsBox>
              <F.Contents1>내 정보 확인하기</F.Contents1>
              <F.Contents2>포인트 충전하러 가기</F.Contents2>
            </F.ContentsBox>
          </div>
        </F.MyPage>
      </F.InfoBox>
    </F.Wrapper>
  );
}
