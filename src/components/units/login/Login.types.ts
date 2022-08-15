import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface ILoginPresenterPageProps {
  onClickLogin: (data: any) => Promise<void>;
  onClickJoin: () => void;
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: any;
}
