export interface IMarketDetailContainerPageProps {
  refetch: any;
  data: any;
}

export interface IMarketDetailPresenterProps {
  data: {
    fetchUseditem: {
      seller: {
        name: string;
      };
      createdAt: string;
      images: any;
      name: string;
      price: number;
      tags: any;
      pickedCount: number;
      remarks: string;
      contents: string;
      useditemAddress: {
        address: string;
        addressDetail: string;
      };
    };
  };
  onClickEdit: () => void;
  onClickDelete: () => Promise<void>;
  onClickBuy: () => Promise<void>;
  onClickPick: () => Promise<void>;
  onClickBasket: () => void;
}
