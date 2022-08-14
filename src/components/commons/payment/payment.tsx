import { useRouter } from "next/router";
import Head from "next/head";
import { MouseEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import styled from "@emotion/styled";

const CREATE_POINT_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

const SelectPrice = styled.select`
  width: 5em;
  height: 1.7em;
  border-radius: 5px;
  border: 1px solid #354259;
  margin-right: 0.5em;
  padding-left: 0.3em;
`;

const AddPoint = styled.button`
  width: 6em;
  height: 1.8em;
  border: none;
  border-radius: 5px;
  background-color: #354259;
  color: #ffffff;
  cursor: pointer;
`;

export default function PaymentPage() {
  const router = useRouter();

  const [price, setPrice] = useState("1000");

  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_LOADING);

  const onClickAddPoint = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        amount: price,
        name: "포인트충전",
        buyer_email: "",
        buyer_name: "",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/market",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          //결제 성공시
          console.log(rsp);

          try {
            createPointTransactionOfLoading({
              variables: { impUid: rsp?.imp_uid },
            });
          } catch (error) {
            alert((error as Error).message);
          }

          Modal.success({ content: "결제가 완료되었습니다!" });
          router.push("/mypage");
        } else {
          //결제 실패시
          Modal.error({ content: "결제에 실패했습니다. 다시 시도해주세요!" });
        }
      }
    );
  };

  const onChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <SelectPrice onChange={onChangePrice}>
        <option value="1000">1,000</option>
        <option value="2000">2,000</option>
        <option value="5000">5,000</option>
      </SelectPrice>
      <AddPoint onClick={onClickAddPoint}>충전하기</AddPoint>
    </>
  );
}
