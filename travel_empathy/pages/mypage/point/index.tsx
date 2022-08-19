import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import PointContainerPage from "../../../src/components/units/mypage/point/Point.container";

export default function PointPage() {
  useAuth();

  return <PointContainerPage />;
}
