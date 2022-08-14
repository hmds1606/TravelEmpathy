import { useMutation, useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailPagePresenter from "./BoardDetailPage.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARDS,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetailPage.queries";

export default function BoardDetailPageContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });
  const onClickList = () => {
    router.push(`/board`);
  };

  const onClickEdit = () => {
    router.push(`/board/${router.query._id}/edit`);
  };

  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { boardId: router.query._id },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (error) {
      alert((error as Error).message);
    }
    alert("삭제가 완료되었습니다!");
    router.push(`/board`);
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  };

  return (
    <BoardDetailPagePresenter
      data={data}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
