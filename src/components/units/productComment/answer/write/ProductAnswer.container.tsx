import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductAnswerPresenter from "./ProductAnswer.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductAnswer.queries";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../list/ProductQuestionList.queries";
import { IProductAnswerContainerProps } from "./ProductAnswer.types";

export default function ProductAnswerContainer(
  props: IProductAnswerContainerProps
) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const onClickAnswer = async (data: any) => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            ...data,
          },
          useditemQuestionId: props.answerId,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.answerId },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
    props.setIsAnswer((prev: any) => !prev);
  };

  const onClickAnswerUpdate = async (data: any) => {
    try {
      console.log(props.answerId);
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            ...data,
          },
          useditemQuestionAnswerId: props.answerEditId,
        },
      });
      props.refetch();
      props.setIsAnswerEdit((prev: any) => !prev);
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  const onClickBackButton = () => {
    props.setIsAnswer(false);
  };

  const onClickBackButtonEdit = () => {
    props.setIsAnswerEdit(false);
  };

  return (
    <ProductAnswerPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickAnswer={onClickAnswer}
      onClickAnswerUpdate={onClickAnswerUpdate}
      isAnswer={props.isAnswer}
      onClickBackButton={onClickBackButton}
      isAnswerEdit={props.isAnswerEdit}
      onClickBackButtonEdit={onClickBackButtonEdit}
      answerData={props.answerData}
    />
  );
}
