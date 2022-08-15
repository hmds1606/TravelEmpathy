import { getDate } from "../../../../commons/libraries/date";
import ProductAnswerListContainer from "../answer/list/ProductAnswerList.container";
import ProductAnswerContainer from "../answer/write/ProductAnswer.container";
import ProductQuestionWriteContainer from "../write/ProductQuestionWrite.container";
import * as S from "./ProductQuestionItem.styles";
import { IProductQuestionItemPresenterProps } from "./ProductQuestionItem.types";

export default function ProductQuestionItemPresenter(
  props: IProductQuestionItemPresenterProps
) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <S.Wrap>
          <S.WrapWriteComment>
            <S.WrapWritedHeader>
              <S.WrapFrontHeader>
                <S.CommentWriter>{props.el.user.name} 님</S.CommentWriter>
              </S.WrapFrontHeader>
              <S.WrapBackHeader>
                <S.Answer
                  src="/img/board/대댓글.png"
                  onClick={props.onClickAnswerImg}
                  id={props.el._id}
                />

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
          <ProductAnswerListContainer el={props.el} />
        </S.Wrap>
      )}

      {props.isEdit === true && (
        <ProductQuestionWriteContainer
          isEdit={props.isEdit}
          editId={props.editId}
          setIsEdit={props.setIsEdit}
          el={props.el}
        />
      )}

      {props.isAnswer === true && (
        <ProductAnswerContainer
          setIsAnswer={props.setIsAnswer}
          isAnswer={props.isAnswer}
          answerId={props.answerId}
          el={props.el}
          onClickAnswerImg={props.onClickAnswerImg}
          //타입
          answerEditId={""}
          refetch={undefined}
          setIsAnswerEdit={undefined}
          isAnswerEdit={false}
          answerData={undefined}
          firstId={undefined}
        />
      )}
    </S.Wrapper>
  );
}
