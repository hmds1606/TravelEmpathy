import axios from "axios";
import { useEffect, useState } from "react";
import MoneyAPIPagePresenter from "./BoardMoneyAPI.presenter";

export default function MoneyAPIPageContainer() {
  const [money, setMoney] = useState();

  useEffect(() => {
    const fetchMoney = async () => {
      const result = await axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/one.json"
      );
      setMoney(result.data);
    };
    fetchMoney();
  });

  return (
    <>
      <MoneyAPIPagePresenter money={money} />
    </>
  );
}
