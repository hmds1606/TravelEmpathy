import { FieldValues, FormState } from "react-hook-form";

export interface IPasswordEditPresenterPageProps {
  onClickPasswordEdit: (data: any) => Promise<void>;
  register: any;
  handleSubmit: any;
  formState: FormState<FieldValues>;
}
