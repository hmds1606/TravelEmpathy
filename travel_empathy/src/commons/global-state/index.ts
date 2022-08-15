import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

//refreshToken으로 권한분기
export const isLoadedState = atom({
  key: "isLoadedState",
  default: false,
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const todayState = atom({
  key: "today",
  default: [],
});

export const basketState = atom({
  key: "basket",
  default: [],
});
