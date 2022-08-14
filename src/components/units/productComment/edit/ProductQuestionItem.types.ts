import { Dispatch, SetStateAction } from "react";

export interface IProductQuestionItemContainerProps {
  el: any;
  onClickDelete: any;
}

export interface IProductQuestionItemPresenterProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  onClickEdit: (event: any) => void;
  el: any;
  onClickDelete: any;
  isEdit: boolean;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
  onClickAnswerImg: (event: any) => void;
  isAnswer: boolean;
  answerId: string;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
}
