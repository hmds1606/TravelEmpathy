//게시판 수정페이지

import { useQuery, gql } from "@apollo/client";
import BoardCreateContainer from "../../../../src/components/units/board/write/BoardCreate.container";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });

  return <BoardCreateContainer isEdit={true} boardData={data} />;
}
