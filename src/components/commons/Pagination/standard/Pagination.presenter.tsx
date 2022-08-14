import { IPaginationPresenterProps } from "./Pagination.types";
import { Page } from "./Pagination.styles";

export default function PaginationPresenter(props: IPaginationPresenterProps) {
  return (
    <>
      <Page onClick={props.onClickPrevPage}>{"<"}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={props.startPage + index === props.activePage}
            >
              {"   "}
              {index + props.startPage}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{">"}</Page>
    </>
  );
}
