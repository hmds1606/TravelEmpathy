export interface IPointPresenterPageProps {
  tabKey: string;
  onChangeKey: (key: string) => void;
  totalPointData: {
    fetchPointTransactions: any;
  };
  addPointData: {
    fetchPointTransactionsOfLoading: any;
  };
}
