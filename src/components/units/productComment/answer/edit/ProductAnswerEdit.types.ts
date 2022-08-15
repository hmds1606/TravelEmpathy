import React from "react";

export interface IProductAnswerEditContainerProps {
  refetch: any;
  onClickDelete: any;
  el: any;
  answerData: any;
}

export interface IProductAnswerEditPresenterProps {
  refetch: any;
  onClickDelete: any;
  el: any;
  onClickEdit: (event: any) => void;
  isAnswerEdit: boolean;
  answerEditId: string;
  setIsAnswerEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswerEditId: React.Dispatch<React.SetStateAction<string>>;
  answerData: any;
}
