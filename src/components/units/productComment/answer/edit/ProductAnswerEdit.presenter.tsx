import React from "react";
import { getDate } from "../../../../../commons/libraries/date";
import ProductAnswerContainer from "../write/ProductAnswer.container";
import * as S from "./ProductAnswerEdit.styles";
import { IProductAnswerEditPresenterProps } from "./ProductAnswerEdit.types";

export default function ProductAnswerEditPresenter(
  props: IProductAnswerEditPresenterProps
) {
  return (
    <S.Wrapper>
      <S.Arrow src="/img/board/대댓글.png" />
      <div>
        {props.isAnswerEdit === false && (
          <S.Wrap>
            <S.WrapWriteComment>
              <S.WrapWritedHeader>
                <S.WrapFrontHeader>
                  <S.CommentWriter>{props.el.user.name} 님</S.CommentWriter>
                </S.WrapFrontHeader>
                <S.WrapBackHeader>
                  <S.Pencil
                    src="/img/board/수정.png"
                    onClick={props.onClickEdit}
                    id={props.el._id}
                  />
                  <S.Delete
                    src="/img/board/삭제.png"
                    id={props.el._id}
                    onClick={props.onClickDelete}
                  />
                </S.WrapBackHeader>
              </S.WrapWritedHeader>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.Date>{getDate(props.el.createdAt)}</S.Date>
            </S.WrapWriteComment>
          </S.Wrap>
        )}

        {props.isAnswerEdit === true && (
          <ProductAnswerContainer
            refetch={props.refetch}
            isAnswerEdit={props.isAnswerEdit}
            setIsAnswerEdit={props.setIsAnswerEdit}
            answerEditId={props.answerEditId}
            firstId={props.el._id}
            answerData={props.el}
            //타입
            answerId={""}
            setIsAnswer={undefined}
            isAnswer={false}
          />
        )}
      </div>
    </S.Wrapper>
  );
}
