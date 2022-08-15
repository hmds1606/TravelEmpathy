import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { todayState } from "../../../../commons/global-state";
import MarketMainPresenterPage from "./MarketMain.presenter";
import { FETCH_USED_ITEMS } from "./MarketMain.queries";
import { IfetchUseditemsEl } from "./MarketMain.types";

export default function MarketMainContainerPage() {
  const router = useRouter();

  const [, setToday] = useRecoilState(todayState);

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onClickRow =
    (el: IfetchUseditemsEl) => (event: MouseEvent<HTMLDivElement>) => {
      const todays = JSON.parse(sessionStorage.getItem("today") || "[]");
      const temp = todays.filter((todaysEl: any) => todaysEl._id !== el._id);
      const { __typename, ...newEl } = el;
      temp.unshift(newEl);

      if (temp.length > 3) {
        temp.pop();
      }

      sessionStorage.setItem("today", JSON.stringify(temp));
      setToday(temp);

      router.push(`/market/${event?.currentTarget.id}`);
    };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickButton = () => {
    router.push("/market/new");
  };

  return (
    <MarketMainPresenterPage
      onClickButton={onClickButton}
      onClickRow={onClickRow}
      data={data}
      loadFunc={loadFunc}
    />
  );
}
