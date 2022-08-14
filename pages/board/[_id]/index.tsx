//게시판 상세페이지

import BoardDetailPageContainer from "../../../src/components/units/board/detail/BoardDetailPage.container";
import BoardCommentListContainer from "../../../src/components/units/boardcomment/List/BoardCommentList.container";
import BoardCommentWriteContainer from "../../../src/components/units/boardcomment/Write/BoardCommentWrite.container";

export default function BoardNewPage() {
  return (
    <>
      <BoardDetailPageContainer />
      <BoardCommentListContainer />
      <BoardCommentWriteContainer
        isEdit={false}
        el={undefined}
        commentId={""}
        setCommentId={undefined}
        setIsEdit={undefined}
      />
    </>
  );
}
