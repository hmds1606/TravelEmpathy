import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductAnswerContainerProps {
  answerId: string;
  setIsAnswer: any;
  answerEditId: string;
  refetch: any;
  setIsAnswerEdit: any;
  isAnswer: boolean;
  isAnswerEdit: boolean;
  answerData: any;
  firstId: any;
  el: any;
  onClickAnswerImg: any;
}

export interface IProductAnswerPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickBackButton: () => void;
  defaultValue?: any;
  onClickAnswer: (data: any) => Promise<void>;
  onClickAnswerUpdate: (data: any) => Promise<void>;
  isAnswer: boolean;
  isAnswerEdit: boolean;
  onClickBackButtonEdit: () => void;
  answerData: any;
}
