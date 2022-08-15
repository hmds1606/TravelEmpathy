import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IJoinPresenterPageProps {
  onClickJoin: (data: any) => Promise<void>;
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: any;
}
