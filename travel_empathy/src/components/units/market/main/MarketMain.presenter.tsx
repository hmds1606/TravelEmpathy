import * as F from "./MarketMain.styles";
import InfiniteScroll from "react-infinite-scroller";
import { getDateBefore } from "../../../../commons/libraries/date";
import { useEffect, useState } from "react";
import MobileCreateButton from "./mobilecreatebutton/MobileCreateButton";
import {
  IfetchUseditemsEl,
  IMarketMainPresenterPageProps,
} from "./MarketMain.types";

export default function MarketMainPresenterPage(
  props: IMarketMainPresenterPageProps
) {
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
    <F.Container>
      {/* <LayoutSidebarContainer /> */}

      <F.Title>중고 제품 보기</F.Title>
      {!windowSize && (
        <F.Button onClick={props.onClickButton}>상품등록</F.Button>
      )}
      {windowSize && <MobileCreateButton />}

      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true} //항상 함수 실행
        useWindow={true}
      >
        <F.Left>
          {props.data?.fetchUseditems.map((el: IfetchUseditemsEl) => (
            <F.MyRow key={el._id} id={el._id} onClick={props.onClickRow(el)}>
              {el.images[0] ? (
                <F.Picture
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <F.NoImageBox>
                  <F.NoImage src="/NoImage.png" />
                </F.NoImageBox>
              )}

              <F.Info>
                <F.InfoBox>
                  <F.InfoName>{el.name}</F.InfoName>
                </F.InfoBox>
                <F.Etc>
                  <F.Price>{el.price.toLocaleString()} 원</F.Price>
                  <F.Date>{getDateBefore(el.createdAt)}</F.Date>
                </F.Etc>
              </F.Info>
            </F.MyRow>
          ))}
        </F.Left>
      </InfiniteScroll>
    </F.Container>
  );
}
