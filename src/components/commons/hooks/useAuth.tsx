import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadedState } from "../../../commons/global-state";

export function useAuth() {
  const router = useRouter();

  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoaded] = useRecoilState(isLoadedState);

  //refreshToken으로 권한분기
  useEffect(() => {
    if (isLoaded && !accessToken) {
      Modal.error({
        content: "로그인 후 이용 가능합니다ㅠㅠ",
      });
      router.push("/login");
    }
  }, [isLoaded]);
}
