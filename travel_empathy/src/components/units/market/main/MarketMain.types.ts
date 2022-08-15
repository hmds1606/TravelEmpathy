import { MouseEvent } from "react";

export interface IfetchUseditemsEl {
  _id: string;
  images: string;
  name: string;
  price: number;
  createdAt: string;
  __typename: any;
}

export interface IMarketMainPresenterPageProps {
  onClickButton: () => void;
  onClickRow: (
    el: IfetchUseditemsEl
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  data: any;
  loadFunc: () => void;
}
