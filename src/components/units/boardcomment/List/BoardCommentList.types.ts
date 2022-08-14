import { Dispatch, SetStateAction } from "react";

export interface IfetchBoardCommentsElProps {
  _id: string;
  writer: string;
  rating: number;
  contents: string;
  createdAt: string;
}

export interface IBoardCommentListPresenterProps {
  data: any;
  onClickDelete: (event: any) => Promise<void>;
  onClickEdit: (event: any) => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setCommentId: Dispatch<SetStateAction<string>>;
  commentId: string;
  loadFunc: any;
}
