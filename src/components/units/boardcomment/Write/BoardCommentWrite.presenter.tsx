import * as F from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import { IBoardCommentWritePresenterProps } from "./BoardCommentWrite.types";

export default function BoardCommentWritePresenter(
  props: IBoardCommentWritePresenterProps
) {
  return (
    // <F.Container>
    <F.CommentWrapper>
      <F.Wrapper ref={props.formRef}>
        <F.InfoBox>
          <F.Writer
            onChange={props.onChangeWriter}
            type="text"
            placeholder="작성자"
            readOnly={props.el?.writer}
            defaultValue={props.el?.writer}
          />
          <F.Password
            onChange={props.onChangePassword}
            type="password"
            placeholder="비밀번호"
          />
          <F.Star>
            <Rate
              onChange={props.onChangeStar}
              value={props.star}
              style={{ color: "#c4d7e0" }}
            />
          </F.Star>
        </F.InfoBox>
        <F.CommentInputBox>
          <F.CommentInput
            maxLength={100}
            placeholder="댓글을 남겨주세요."
            onChange={props.onChangeContents}
            defaultValue={props.el?.contents}
          />
          <F.ButtonBox>
            <F.Count>{props.contents.length}/100</F.Count>
            <F.Button
              onClick={props.isEdit ? props.onClickEdit : props.onClickButton}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </F.Button>
          </F.ButtonBox>
        </F.CommentInputBox>
      </F.Wrapper>
    </F.CommentWrapper>
    // </F.Container>
  );
}
