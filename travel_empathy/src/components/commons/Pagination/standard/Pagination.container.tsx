import PaginationPresenter from "./Pagination.presenter";
import { MouseEvent, useState } from "react";
import { IPaginationProps } from "./Pagination.types";

export default function PaginationContainer(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const lastPage = Math.ceil(props.dataBoardsCount / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activePage = Number(event.target.id);
    setActivePage(activePage);
    props.refetch({ page: activePage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  function onClickNextPage() {
    if (startPage + 10 <= lastPage) {
      // if (!(startPage + 10 <= lastPage)) return도 가능
      setStartPage((prev) => prev + 10);
      setActivePage(startPage + 10);
      props.refetch({ page: startPage + 10 });
    }
  }

  return (
    <>
      <PaginationPresenter
        startPage={startPage}
        lastPage={lastPage}
        activePage={activePage}
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
      />
    </>
  );
}
