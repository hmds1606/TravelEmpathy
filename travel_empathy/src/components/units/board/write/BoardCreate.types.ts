import { ChangeEvent } from "react";

export interface IProps {
  isEdit: boolean;
  boardData?: any;
}

export interface IObj {
  variables: any;
}

export interface IBoardCreatePresenterProps {
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContents: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: any;
  onClickSignup: () => void;
  isActive: any;
  isEdit: boolean;
  boardData?: any;
  onClickUpdateButton: () => void;
  isOpen: boolean;
  zipcode: any;
  address: any;
  addressDetail: any;
  imageUrl: any;
  onChangeImageUrls: (fileUrl: string, index: number) => void;
}
