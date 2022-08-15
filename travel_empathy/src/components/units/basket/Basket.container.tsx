import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BasketPresenterPage from "./Basket.presenter";
import { IBasketItems } from "./Basket.types";

export default function BasketContainerPage() {
  const router = useRouter();

  const [basketItems, setBasketItems] = useState<IBasketItems[]>([]);

  const onClickRow = (event: { currentTarget: { id: any } }) => {
    router.push(`/market/${event?.currentTarget.id}`);
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <BasketPresenterPage basketItems={basketItems} onClickRow={onClickRow} />
  );
}
