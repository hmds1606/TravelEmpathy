import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductQuestionWriteContainerProps {
  editId: string;
  setIsEdit: any;
  isEdit: boolean;
  el: any;
}

export interface IProductQuestionWritePresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickComment: (data: any) => Promise<void>;
  formState: FormState<FieldValues>;
  onClickUpdate: (data: any) => Promise<void>;
  isEdit: boolean;
  onClickBackButton: () => void;
  defaultValue?: any;
}
