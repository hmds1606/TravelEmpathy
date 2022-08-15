import { useState } from "react";
import ProductQuestionItemPresenter from "./ProductQuestionItem.presenter";
import { IProductQuestionItemContainerProps } from "./ProductQuestionItem.types";

export default function ProductQuestionItemContainer(
  props: IProductQuestionItemContainerProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const [isAnswer, setIsAnswer] = useState(false);
  const [answerId, setAnswerId] = useState("");

  const onClickAnswerImg = (event: any) => {
    setIsAnswer((prev) => !prev);
    setAnswerId(event.target.id);
  };

  const onClickEdit = (event: any) => {
    setIsEdit((prev) => !prev);
    setEditId(event.target.id);
  };

  return (
    <ProductQuestionItemPresenter
      setIsEdit={setIsEdit}
      onClickEdit={onClickEdit}
      el={props.el}
      onClickDelete={props.onClickDelete}
      isEdit={isEdit}
      editId={editId}
      setEditId={setEditId}
      // Answer
      onClickAnswerImg={onClickAnswerImg}
      isAnswer={isAnswer}
      answerId={answerId}
      setIsAnswer={setIsAnswer}
    />
  );
}
