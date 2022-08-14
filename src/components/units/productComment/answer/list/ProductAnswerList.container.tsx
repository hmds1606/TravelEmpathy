import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import React from "react";
import ProductAnswerListPresenter from "./ProductAnswerList.presenter";
import {
  DELETE_USED_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./ProductAnswerList.queries";

export default function ProductAnswerListContainer(props: any) {
  const { data: answerData, refetch } = useQuery(
    FETCH_USED_ITEM_QUESTION_ANSWERS,
    {
      variables: { useditemQuestionId: props.el._id },
    }
  );

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_QUESTION_ANSWER
  );

  const onClickDelete = async (event: any) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id,
        },
      });
      refetch();
      Modal.success({ content: "댓글이 삭제 되었습니다!" });
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  return (
    <div>
      <ProductAnswerListPresenter
        answerData={answerData}
        onClickDelete={onClickDelete}
        refetch={refetch}
      />
    </div>
  );
}
