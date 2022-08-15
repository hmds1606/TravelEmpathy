import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import Head from "next/head";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/apollo";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOTUOYMGu8-7Dwqa6gAO8SY8iTJXh4FQ",
  authDomain: "freeboard-firebase.firebaseapp.com",
  projectId: "freeboard-firebase",
  storageBucket: "freeboard-firebase.appspot.com",
  messagingSenderId: "211594070258",
  appId: "1:211594070258:web:e5ed1681806a79af67e86b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>여행공감</title>
        <meta
          property="og:여행공감"
          content="프로여행러들의 공감 커뮤니티"
        ></meta>
        <meta
          property="og:description"
          content="환율정보부터 중고마켓까지! 프로여행러들의 공감 커뮤니티입니다."
        ></meta>
        <meta property="og:image" content="/img/배경로고.png"></meta>
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
