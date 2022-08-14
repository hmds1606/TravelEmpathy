export interface IBasketItemsProps {
  _id: string;
  images: string;
  name: string;
  price: number;
}

export interface IBasketItems {
  _id: string;
  writer: string;
  title: string;
}

export interface IBasketPresenterPageProps {
  basketItems: any;
  onClickRow: (event: {
    currentTarget: {
      id: any;
    };
  }) => void;
}
