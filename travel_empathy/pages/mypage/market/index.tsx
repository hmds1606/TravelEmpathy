import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import MarketContainerPage from "../../../src/components/units/mypage/market/Market.container";

export default function MarketPage() {
  useAuth();

  return <MarketContainerPage />;
}
