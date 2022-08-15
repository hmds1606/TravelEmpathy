import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IMarketNewContainerPageProps {
  marketData: any;
  isEdit: boolean;
}

export interface IMarketNewPresenterProps {
  onClickSubmit: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: any;
  onChangeContents: (value: string) => void;
  isEdit: boolean;
  marketData: any;
  lat: any;
  lng: any;
  tagItem: string;
  setTagItem: Dispatch<SetStateAction<string>>;
  tagList: never[];
  setTagList: Dispatch<SetStateAction<never[]>>;
  location: string;
  imageUrl: string[];
  onChangeImageUrls: (fileUrl: string, index: number) => void;
}
