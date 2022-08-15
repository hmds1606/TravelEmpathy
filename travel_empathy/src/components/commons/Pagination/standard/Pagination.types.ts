import { MouseEvent } from "react";

export interface IPaginationProps {
  dataBoardsCount?: any;
  refetch: any;
}

export interface IPaginationPresenterProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
