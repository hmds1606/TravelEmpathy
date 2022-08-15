import * as F from "./BoardCommentList.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";
import BoardCommentWriteContainer from "../Write/BoardCommentWrite.container";
import { getDate } from "../../../../commons/libraries/date";
import {
  IBoardCommentListPresenterProps,
  IfetchBoardCommentsElProps,
} from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListPresenter(
  props: IBoardCommentListPresenterProps
) {
  return (
    <F.Wrapper>
      <F.CommentTitleBox>
        <F.TitlePicture src="/pictures/comment.png" />
        <F.Title>댓글</F.Title>
      </F.CommentTitleBox>

      <F.Dom>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          <F.FooterBox>
            <F.CommentResultBox>
              {props.data?.fetchBoardComments.map(
                (el: IfetchBoardCommentsElProps) => (
                  <F.Info key={el._id}>
                    {props.commentId !== el._id && (
                      <F.Flex>
                        <F.NameRatingBox>
                          <F.Name>{el.writer}</F.Name>
                          <Rate
                            value={el.rating}
                            style={{ color: "#c4d7e0" }}
                          ></Rate>
                        </F.NameRatingBox>
                        <F.Contents>{el.contents}</F.Contents>
                        <F.Date>{getDate(el.createdAt)}</F.Date>
                        <F.EditDeleteBox>
                          <F.Edit
                            onClick={props.onClickEdit}
                            id={el._id}
                            src="/img/board/수정.png"
                          />
                          <F.Delete
                            id={el._id}
                            onClick={props.onClickDelete}
                            src="/img/board/삭제.png"
                          />
                        </F.EditDeleteBox>
                      </F.Flex>
                    )}
                    {props.commentId === el._id && (
                      <BoardCommentWriteContainer
                        setIsEdit={props.setIsEdit}
                        isEdit={props.isEdit}
                        commentId={props.commentId}
                        setCommentId={props.setCommentId}
                        el={el}
                      />
                    )}
                  </F.Info>
                )
              )}
            </F.CommentResultBox>
          </F.FooterBox>
        </InfiniteScroll>
      </F.Dom>
    </F.Wrapper>
  );
}
