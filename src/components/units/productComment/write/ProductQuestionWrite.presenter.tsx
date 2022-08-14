import * as F from "./ProductQuestionWrite.styles";
import { IProductQuestionWritePresenterProps } from "./ProductQuestionWrite.types";

export default function ProductQuestionWritePresenter(
  props: IProductQuestionWritePresenterProps
) {
  return (
    <F.Wrapper>
      <F.FormBox
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickComment)
        }
      >
        <F.Body>
          <F.WrapTitle>
            <F.TitlePicture src="/pictures/comment.png" />
            <F.Title>{props.isEdit ? "댓글 수정" : "댓글 등록"}</F.Title>
          </F.WrapTitle>

          <F.WrapperWriteComment>
            <F.WriteContent
              maxLength={100}
              type="text"
              {...props.register("contents")}
              placeholder="댓글을 입력해주세요."
              defaultValue={props.defaultValue?.contents}
            />
            <F.WriteFooter>
              <F.CommentButton>
                {props.isEdit ? "수정하기 " : "등록하기"}
              </F.CommentButton>
              {props.isEdit && (
                <F.EditButton type="button" onClick={props.onClickBackButton}>
                  수정 취소
                </F.EditButton>
              )}
            </F.WriteFooter>
          </F.WrapperWriteComment>
        </F.Body>
      </F.FormBox>
    </F.Wrapper>
  );
}
