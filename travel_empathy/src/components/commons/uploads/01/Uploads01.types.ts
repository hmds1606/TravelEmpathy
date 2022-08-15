import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeImageUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickImage: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
