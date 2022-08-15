import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/global-state";
import LoginPresenterPage from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";
import { useApolloClient } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../commons/schema/login/yup-schema-login";

export default function LoginContainerPage() {
  const router = useRouter();
  const client = useApolloClient();

  const [loginUser] = useMutation(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    const result = await loginUser({
      variables: { email: data.email, password: data.password },
    });
    const accessToken = result.data?.loginUser.accessToken;

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    Modal.success({ content: "로그인에 성공했습니다!" });
    router.push("/market");
  };

  const onClickJoin = () => {
    router.push("/join");
  };

  return (
    <LoginPresenterPage
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
