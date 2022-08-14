import * as F from "./BoardList.styles";
import PaginationContainer from "../../../commons/Pagination/standard/Pagination.container";
import { v4 as uuidv4 } from "uuid";
import { getDate, mobileGetDate } from "../../../../commons/libraries/date";
import { DatePicker, Space } from "antd";
import { useEffect, useState } from "react";
import MobileCreateButton from "./mobilecreatebutton/MobileCreateButton";
import { IfetchBoardsProps, IListPagePresenterProps } from "./BoardList.types";

export default function ListPagePresenter(props: IListPagePresenterProps) {
  const [windowSize, setWindowSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <F.Wrapper>
      <F.Title>자유게시판</F.Title>
      <F.SearchBox>
        <F.TitleSearch
          type="text"
          placeholder="제목을 검색해주세요."
          onChange={props.onChangeSearch}
        />

        {!windowSize && (
          <Space
            direction="vertical"
            style={{
              width: "32%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DatePicker
              onChange={props.onChangeStartDate}
              style={{ width: "100%", height: "52px", borderRadius: "10px" }}
              placeholder="시작날짜"
            />
            <F.Between>~</F.Between>
            <DatePicker
              onChange={props.onChangeEndDate}
              style={{ width: "100%", height: "52px", borderRadius: "10px" }}
              placeholder="종료날짜"
            />
          </Space>
        )}

        {windowSize && (
          <Space
            direction="vertical"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <DatePicker
              onChange={props.onChangeStartDate}
              style={{ width: "100%", height: "40px", borderRadius: "10px" }}
              placeholder="시작날짜"
            />
            <F.Between>~</F.Between>
            <DatePicker
              onChange={props.onChangeEndDate}
              style={{ width: "100%", height: "40px", borderRadius: "10px" }}
              placeholder="종료날짜"
            />
          </Space>
        )}

        <F.SearchBtn onClick={props.onClickSearch}>검색하기</F.SearchBtn>
      </F.SearchBox>

      <F.List>
        <F.TitleRow>
          <F.MyColumn>번호</F.MyColumn>
          <F.MyColumn>제목</F.MyColumn>
          <F.MyColumn>작성자</F.MyColumn>
          <F.MyColumn>날짜</F.MyColumn>
        </F.TitleRow>
        <F.FixedTitle onClick={props.onClickBag}>
          ★ 알맞은 여행용 가방 고르기
        </F.FixedTitle>
        <F.FixedTitle onClick={props.onClickJeju}>
          ★ 제주도민이 알려주는 제주도 여행 꿀팁
        </F.FixedTitle>
        <F.FixedTitle onClick={props.onClickFood}>
          ★ 휴게소 맛집 추천
        </F.FixedTitle>

        {props.data?.fetchBoards.map((el: IfetchBoardsProps) => (
          <F.MyRow key={el._id} id={el._id} onClick={props.onClickTitle}>
            <F.MyColumn>{el._id.slice(-4).toUpperCase()}</F.MyColumn>
            <F.MyColumn>
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <F.Word key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </F.Word>
                ))}
            </F.MyColumn>
            <F.MyColumn>{el.writer}</F.MyColumn>
            {!windowSize && <F.MyColumn>{getDate(el.updatedAt)}</F.MyColumn>}
            {windowSize && (
              <F.MyColumn>{mobileGetDate(el.updatedAt)}</F.MyColumn>
            )}
          </F.MyRow>
        ))}
      </F.List>

      <F.FooterBox>
        <F.PaginationBox>
          <F.Pagination>
            <PaginationContainer
              refetch={props.refetch}
              dataBoardsCount={props.dataBoardsCount}
            />
          </F.Pagination>
        </F.PaginationBox>
        {!windowSize && (
          <F.CreateButtonBox>
            <F.Button onClick={props.onClickCreate}>🖍 게시물 등록하기</F.Button>
          </F.CreateButtonBox>
        )}
        {windowSize && <MobileCreateButton />}
      </F.FooterBox>
    </F.Wrapper>
  );
}
