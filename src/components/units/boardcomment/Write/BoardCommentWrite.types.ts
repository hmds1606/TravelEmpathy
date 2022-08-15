import { ChangeEvent } from "react";

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}

export interface IBoardCommentWriteContainerProps {
  isEdit: boolean;
  el: any;
  commentId: string;
  setCommentId: any;
  setIsEdit: any;
}

export interface IBoardCommentWritePresenterProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: any) => void;
  onChangeStar: (star: number) => void;
  star: number;
  contents: string;
  isEdit: boolean;
  onClickButton: (event: any) => Promise<void>;
  onClickEdit: () => Promise<void>;
  el: any;
  formRef: any;
}
