import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import PasswordEditContainerPage from "../../../src/components/units/mypage/passwordedit/PasswordEdit.container";

export default function PasswordEditPage() {
  useAuth();

  return <PasswordEditContainerPage />;
}
