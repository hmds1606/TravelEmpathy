import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  basketState,
} from "../../../../commons/global-state";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();

  const [basketItems, setBasketItems] = useRecoilState(basketState);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickMainLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    if (localStorage.getItem("accessToken")) {
      router.push("/mypage/market");
    } else {
      router.push("/login");
    }
  };

  const onClickJoinLogout = () => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken("");
      localStorage.removeItem("accessToken");
      logoutUser();
      router.push("/login");
    } else {
      router.push("/join");
    }
  };

  const onClickBasket = () => {
    if (localStorage.getItem("accessToken")) {
      router.push("/mypage/basket");
    } else {
      alert("로그인을 해주세요!");
    }
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <LayoutHeaderUI
      onClickMainLogo={onClickMainLogo}
      onClickLogin={onClickLogin}
      onClickJoinLogout={onClickJoinLogout}
      onClickBasket={onClickBasket}
      data={data}
      basketItems={basketItems}
    />
  );
}
