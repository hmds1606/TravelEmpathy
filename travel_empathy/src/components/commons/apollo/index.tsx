import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadedState } from "../../../commons/global-state";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
  children: any;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsLoaded] = useRecoilState(isLoadedState);

  useEffect(() => {
    //refreshToken으로 권한분기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
      setIsLoaded(true);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //operation은 방금 실패한 정보들
    //1-1.에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        //1-2.해당에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            //2-2.재발급받은 accessToken 리코일스테이트에도 저장하기
            setAccessToken(newAccessToken);

            //3-1.재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              //바꾸고 싶은거
              headers: {
                ...operation.getContext().headers, //가져오고 싶은거(=기존내용은 다 유지한채)
                Authorization: `Bearer ${newAccessToken}`, //accessToken만 바꿔준다
              },
            });

            //3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql18",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
