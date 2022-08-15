import * as F from "./LayoutSidebar.styles";
import { ILayoutSidebarPresenterProps, ITodayEl } from "./LayoutSidebar.types";

export default function LayoutSidebarPresenter(
  props: ILayoutSidebarPresenterProps
) {
  return (
    <F.Right>
      <F.Title>최근 본 상품</F.Title>
      <F.RightLine>
        {props.today.map((el: ITodayEl) => (
          <F.MyKey key={el._id} id={el._id} onClick={props.onClickRow}>
            <F.TodayPicture>
              {el.images[0] ? (
                <F.MiniPicture
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <F.TodayNoImageBox>
                  <F.TodayNoImage src="/NoImage.png" />
                </F.TodayNoImageBox>
              )}
            </F.TodayPicture>
            <F.TodayInfo>
              <F.MyContents>{el.name}</F.MyContents>
              <F.MyContents>{el.price} 원</F.MyContents>
            </F.TodayInfo>
          </F.MyKey>
        ))}
      </F.RightLine>
    </F.Right>
  );
}
