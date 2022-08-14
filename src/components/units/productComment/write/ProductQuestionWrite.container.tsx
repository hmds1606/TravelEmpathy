import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductQuestionWrite.queries";
import { Modal } from "antd";

import { useRouter } from "next/router";
import ProductQuestionWritePresenter from "./ProductQuestionWrite.presenter";
import { IProductQuestionWriteContainerProps } from "./ProductQuestionWrite.types";

export default function ProductQuestionWriteContainer(
  props: IProductQuestionWriteContainerProps
) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });

  const onClickComment = async (data: any) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            ...data,
          },
          useditemId: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query._id },
          },
        ],
      });
      reset();
    } catch (error) {
      Modal.error({
        content: (error as Error).message,
      });
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            ...data,
          },
          useditemQuestionId: props.editId,
        },
      });
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
    props.setIsEdit(false);
  };

  const onClickBackButton = () => {
    props.setIsEdit(false);
  };

  return (
    <ProductQuestionWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickComment={onClickComment}
      formState={formState}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      onClickBackButton={onClickBackButton}
      defaultValue={props.el}
    />
  );
}
