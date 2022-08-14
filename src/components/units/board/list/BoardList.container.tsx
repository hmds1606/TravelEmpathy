import ListPagePresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState } from "react";
import _ from "lodash";
import { DatePickerProps } from "antd";

export default function ListPageContainer() {
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState(
    new Date(2000, 2, 1).toISOString()
  );
  const [endDate, setEndDate] = useState(new Date().toISOString());

  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onClickCreate = () => {
    router.push(`/board/new`);
  };

  const onClickTitle = (event: { currentTarget: { id: any } }) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1, startDate, endDate });
    refetchCount({ search: data, startDate, endDate });
    setKeyword(data);
  }, 500);

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value);
  };

  const onChangeStartDate: DatePickerProps["onChange"] = (date, dateString) => {
    if (date === null) {
      const aaa = new Date(2000, 2, 1);
      setStartDate(aaa.toISOString());
    } else {
      const aaa = new Date(dateString + "T00:00:00");
      setStartDate(aaa.toISOString());
    }
  };

  const onChangeEndDate: DatePickerProps["onChange"] = (date, dateString) => {
    if (date === null) {
      const aaa = new Date();
      setEndDate(aaa.toISOString());
    } else {
      const aaa = new Date(dateString + "T23:59:59");
      setEndDate(aaa.toISOString());
    }
  };

  const onClickSearch = () => {
    getDebounce(keyword);
  };

  const onClickBag = () => {
    router.push("/board/fixedinfo/bag");
  };

  const onClickJeju = () => {
    router.push("/board/fixedinfo/jeju");
  };

  const onClickFood = () => {
    router.push("/board/fixedinfo/food");
  };

  return (
    <ListPagePresenter
      data={data}
      onClickCreate={onClickCreate}
      onClickTitle={onClickTitle}
      refetch={refetch}
      keyword={keyword}
      onClickBag={onClickBag}
      onClickJeju={onClickJeju}
      onClickFood={onClickFood}
      dataBoardsCount={dataBoardsCount?.fetchBoardsCount}
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  );
}
