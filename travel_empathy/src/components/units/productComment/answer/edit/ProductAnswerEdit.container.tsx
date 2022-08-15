import React, { useState } from "react";
import ProductAnswerEditPresenter from "./ProductAnswerEdit.presenter";
import { IProductAnswerEditContainerProps } from "./ProductAnswerEdit.types";

export default function ProductAnswerEditContainer(
  props: IProductAnswerEditContainerProps
) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [answerEditId, setAnswerEditId] = useState("");

  const onClickEdit = (event: any) => {
    setIsAnswerEdit((prev) => !prev);
    setAnswerEditId(event.target.id);
  };

  return (
    <ProductAnswerEditPresenter
      refetch={props.refetch}
      onClickDelete={props.onClickDelete}
      key={props.el._id}
      el={props.el}
      onClickEdit={onClickEdit}
      isAnswerEdit={isAnswerEdit}
      answerEditId={answerEditId}
      setIsAnswerEdit={setIsAnswerEdit}
      setAnswerEditId={setAnswerEditId}
      answerData={props.answerData}
    />
  );
}
