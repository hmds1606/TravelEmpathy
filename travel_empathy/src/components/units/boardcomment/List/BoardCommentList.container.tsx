import BoardCommentListPresenter from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardCommentListContainer() {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [commentId, setCommentId] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query._id },
  });

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickDelete = async (event: any) => {
    const deletePassword = prompt("비밀번호를 입력해주세요.");

    try {
      await deleteBoardComment({
        variables: {
          password: deletePassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
      alert("댓글이 삭제되었습니다!");
    } catch (error) {
      alert(error);
    }
  };

  const onClickEdit = (event: any) => {
    setCommentId(event?.target.id);
    setIsEdit(true);
  };

  return (
    <BoardCommentListPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      setCommentId={setCommentId}
      commentId={commentId}
      loadFunc={loadFunc}
    />
  );
}
