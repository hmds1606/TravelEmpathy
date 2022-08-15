import * as F from "./BoardDetailPage.styles";
import { getDate } from "../../../../commons/libraries/date";
import { IBoardDetailPagePresenterProps } from "./BoardDetailPage.types";

export default function BoardDetailPagePresenter(
  props: IBoardDetailPagePresenterProps
) {
  return (
    <F.Container>
      <F.Wrapper>
        <F.MainTitle>
          <F.InfoBox>
            <F.InfoNameDate>
              <F.InfoName>{props.data?.fetchBoard.writer}</F.InfoName>
              <F.InfoDate>
                {getDate(props.data?.fetchBoard.createdAt)}
              </F.InfoDate>
            </F.InfoNameDate>
          </F.InfoBox>
          <F.LinkLocationBox>
            <F.Location src="/img/board/location.png" />
            <F.LocationDetail>{`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}</F.LocationDetail>
          </F.LinkLocationBox>
        </F.MainTitle>
        <F.Title>{props.data?.fetchBoard.title}</F.Title>
        <F.Images>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el !== "")
            .map((el: string) => (
              <F.ImageDetail
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </F.Images>

        <F.Contents>{props.data?.fetchBoard.contents}</F.Contents>
        <F.VideoGoodBadBox>
          {props.data?.fetchBoard.youtubeUrl ? (
            <F.VideoDetail
              url={props.data?.fetchBoard.youtubeUrl}
              width="100%"
              height="25em"
            />
          ) : (
            ""
          )}
        </F.VideoGoodBadBox>
        <F.GoodBadBox>
          <F.Good>
            <F.LikePicture
              onClick={props.onClickLike}
              src="/pictures/like.png"
            />
            <F.Count>{props.data?.fetchBoard.likeCount}</F.Count>
          </F.Good>
          <F.Bad>
            <F.BadPicture
              onClick={props.onClickDislike}
              src="/pictures/bad.png"
            />
            <F.Count>{props.data?.fetchBoard.dislikeCount}</F.Count>
          </F.Bad>
        </F.GoodBadBox>
      </F.Wrapper>

      <F.ButtonBox>
        <F.Button onClick={props.onClickList}>목록으로</F.Button>
        <F.Button onClick={props.onClickEdit}>수정하기</F.Button>
        <F.Button onClick={props.onClickDelete}>삭제하기</F.Button>
      </F.ButtonBox>
      <F.Line></F.Line>
    </F.Container>
  );
}
