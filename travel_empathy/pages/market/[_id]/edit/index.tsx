import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketNewContainerPage from "../../../../src/components/units/market/new/MarketNew.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      seller {
        name
        createdAt
      }
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
      images
      tags
    }
  }
`;

export default function MarketEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query._id },
  });

  return loading ? (
    <></>
  ) : (
    <MarketNewContainerPage isEdit={true} marketData={data} />
  );
}
