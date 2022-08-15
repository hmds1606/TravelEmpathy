export interface IMarketPresenterPageProps {
  tabKey: string;
  onChangeKey: (key: string) => void;
  isoldData: {
    fetchUseditemsISold: any;
  };
  ipickedData: {
    fetchUseditemsIPicked: any;
  };
  buyingPointData: {
    fetchPointTransactionsOfBuying: any;
  };
  sellingPointDdata: {
    fetchPointTransactionsOfSelling: any;
  };
}
