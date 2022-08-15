import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IfetchBoardsProps {
  _id: string;
  title: string;
  writer: string;
  updatedAt: string;
}

export interface IListPagePresenterProps {
  data: any;
  onClickCreate: () => void;
  onClickTitle: (event: {
    currentTarget: {
      id: any;
    };
  }) => void;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  keyword: string;
  onClickBag: () => void;
  onClickJeju: () => void;
  onClickFood: () => void;
  dataBoardsCount: any;
  onChangeStartDate: (value: any, dateString: string) => void;
  onChangeEndDate: (value: any, dateString: string) => void;
  onChangeSearch: (event: any) => void;
  onClickSearch: () => void;
}
