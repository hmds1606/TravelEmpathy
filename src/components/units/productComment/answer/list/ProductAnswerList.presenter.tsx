import React from "react";

import ProductAnswerEditContainer from "../edit/ProductAnswerEdit.container";
import * as S from "./ProductAnswerList.styles";
import { IProductAnswerListPresenterProps } from "./ProductAnswerList.types";

export default function ProductAnswerListPresenter(
  props: IProductAnswerListPresenterProps
) {
  return (
    <S.Wrapper>
      {props.answerData?.fetchUseditemQuestionAnswers.map((el: any) => (
        <S.Wrap key={el._id}>
          <ProductAnswerEditContainer
            refetch={props.refetch}
            key={el._id}
            onClickDelete={props.onClickDelete}
            el={el}
            answerData={props.answerData}
          />
        </S.Wrap>
      ))}
    </S.Wrapper>
  );
}
