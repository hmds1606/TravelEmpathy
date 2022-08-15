import { MouseEvent } from "react";

export interface ITodayEl {
  _id: string;
  images: string;
  name: string;
  price: number;
}

export interface ILayoutSidebarPresenterProps {
  onClickRow: (event: MouseEvent<HTMLDivElement>) => void;
  today: any;
}
