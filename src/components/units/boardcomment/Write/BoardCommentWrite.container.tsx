import BoardCommentWritePresenter from "./BoardCommentWrite.presenter";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  CREATE_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { useMutation } from "@apollo/client";
import {
  IBoardCommentWriteContainerProps,
  IUpdateBoardCommentInput,
} from "./BoardCommentWrite.types";

export default function BoardCommentWriteContainer(
  props: IBoardCommentWriteContainerProps
) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(3);
  const formRef = useRef<any>();

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onChangeStar = (star: number) => {
    setStar(star);
  };

  const onClickButton = async (event: any) => {
    event.preventDefault();

    if (writer && password && contents) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: Number(star),
            },
            boardId: router.query._id,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query._id },
            },
          ],
        });

        formRef.current.reset();
        setWriter("");
        setPassword("");
        setContents("");
        setStar(3);
      } catch (error) {
        alert((error as Error).message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다");
      return;
    }

    if (!password) {
      alert("비밀번호가 입력되지 않았습니다");
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setCommentId("");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <>
      <BoardCommentWritePresenter
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeStar={onChangeStar}
        star={star}
        contents={contents}
        isEdit={props.isEdit}
        onClickButton={onClickButton}
        onClickEdit={onClickEdit}
        el={props.el}
        formRef={formRef}
      />
    </>
  );
}
