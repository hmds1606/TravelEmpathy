import { useQuery } from "@apollo/client";
import { useState } from "react";
import PointPresenterPage from "./Point.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
} from "./Point.queries";

export default function PointContainerPage() {
  const [tabKey, setTabKey] = useState("1");

  const onChangeKey = (key: string) => {
    setTabKey(key);
  };

  const { data: fetchPointTransactions } = useQuery(FETCH_POINT_TRANSACTIONS);

  const { data: fetchPointTransactionsOfLoading } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING
  );

  return (
    <PointPresenterPage
      tabKey={tabKey}
      onChangeKey={onChangeKey}
      totalPointData={fetchPointTransactions}
      addPointData={fetchPointTransactionsOfLoading}
    />
  );
}
