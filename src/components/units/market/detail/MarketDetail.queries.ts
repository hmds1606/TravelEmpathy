import { gql } from "@apollo/client";

// export const CREATE_USED_ITEM = gql`
//   mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
//     createUseditem(createUseditemInput: $createUseditemInput) {
//       name
//       remarks
//       contents
//       price
//       useditemAddress {
//         address
//         addressDetail
//       }
//     }
//   }
// `;

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
        # createdAt
      }
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
      images
      pickedCount
      tags
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
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
        address
        addressDetail
      }
      images
      tags
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
