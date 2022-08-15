import React from "react";
import * as S from "./ProductAnswer.styles";
import { IProductAnswerPresenterProps } from "./ProductAnswer.types";

export default function ProductAnswerPresenter(
  props: IProductAnswerPresenterProps
) {
  return (
    <>
      <form
        onSubmit={
          props.isAnswerEdit
            ? props.handleSubmit(props.onClickAnswerUpdate)
            : props.handleSubmit(props.onClickAnswer)
        }
      >
        <S.Wrapper>
          {/* 댓글 */}
          <S.WrapTitle>
            <S.TitlePicture src="/pictures/comment.png" />

            <S.Title>{props.isAnswerEdit ? "답변 수정" : "답변 등록"}</S.Title>
          </S.WrapTitle>

          <S.WrapperWriteComment>
            <S.WriteContent
              maxLength={100}
              type="text"
              {...props.register("contents")}
              placeholder="답글을 등록해주세요."
              defaultValue={props.answerData?.contents}
            />
            <S.WriteFooter>
              {/* <S.WriteNum>{props.contents.length}/100</S.WriteNum> */}
              <S.CommentButton>
                {props.isAnswerEdit ? "수정하기" : "답변하기"}
              </S.CommentButton>
              {props.isAnswer && (
                <S.EditButton type="button" onClick={props.onClickBackButton}>
                  답변 취소
                </S.EditButton>
              )}
              {props.isAnswerEdit && (
                <S.EditButton
                  type="button"
                  onClick={props.onClickBackButtonEdit}
                >
                  답변 취소
                </S.EditButton>
              )}
            </S.WriteFooter>
          </S.WrapperWriteComment>
          {/* <S.Error>{props.formState.errors.contents?.message}</S.Error> */}
        </S.Wrapper>
      </form>
    </>
  );
}
