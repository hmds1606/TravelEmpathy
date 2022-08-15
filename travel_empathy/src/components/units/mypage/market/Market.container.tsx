import { useQuery } from "@apollo/client";
import { useState } from "react";
import MarketPresenterPage from "./Market.presenter";
import {
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_ISOLD,
} from "./Market.queries";

export default function MarketContainerPage() {
  const [tabKey, setTabKey] = useState("1");

  const onChangeKey = (key: string) => {
    setTabKey(key);
  };

  const { data: fetchUseditemsISold } = useQuery(FETCH_USED_ITEMS_ISOLD);
  const { data: fetchUseditemsIPicked } = useQuery(FETCH_USED_ITEMS_IPICKED, {
    variables: {
      search: "",
    },
  });
  const { data: fetchPointTransactionsOfBuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  const { data: fetchPointTransactionsOfSelling } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING
  );

  return (
    <MarketPresenterPage
      tabKey={tabKey}
      onChangeKey={onChangeKey}
      isoldData={fetchUseditemsISold}
      ipickedData={fetchUseditemsIPicked}
      buyingPointData={fetchPointTransactionsOfBuying}
      sellingPointDdata={fetchPointTransactionsOfSelling}
    />
  );
}
