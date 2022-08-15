import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailContainerPage from "../../../src/components/units/market/detail/MarketDetail.container";
import ProductQuestionWriteContainer from "../../../src/components/units/productComment/write/ProductQuestionWrite.container";
import ProductQuestionListContainer from "../../../src/components/units/productComment/list/ProductQuestionList.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      seller {
        name
      }
      useditemAddress {
        address
        addressDetail
      }
      images
      pickedCount
      tags
    }
  }
`;
export default function MarketDetailPage() {
  const router = useRouter();

  const { data, loading, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query._id },
  });
  return loading ? (
    <></>
  ) : (
    <>
      <MarketDetailContainerPage data={data} refetch={refetch} />
      <ProductQuestionWriteContainer
        editId={""}
        setIsEdit={undefined}
        isEdit={false}
        el={undefined}
      />
      <ProductQuestionListContainer />
    </>
  );
}
