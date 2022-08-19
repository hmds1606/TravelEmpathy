import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import BasketContainerPage from "../../../src/components/units/basket/Basket.container";

export default function MapBoardPage() {
  useAuth();

  return <BasketContainerPage />;
}
