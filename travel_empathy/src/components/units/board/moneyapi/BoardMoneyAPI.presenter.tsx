import * as F from "./BoardMoneyAPI.styles";

interface IMoneyAPIPagePresenterProps {
  money: any;
}

export default function MoneyAPIPagePresenter(
  props: IMoneyAPIPagePresenterProps
) {
  return (
    <F.Wrapper>
      <F.Title>환율정보</F.Title>
      <F.DateKRWBox>
        <F.Date>{props.money?.date}</F.Date>
        <F.KRW>KRW 1,000원 기준</F.KRW>
      </F.DateKRWBox>
      <F.TotalBox>
        <F.Box>
          <F.Country>
            🇺🇸 미국(USD): {(props.money?.one.usd * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇯🇵 일본(JPY): {(props.money?.one.jpy * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇨🇳 중국(CNY): {(props.money?.one.cny * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇪🇺 유로(EUR): {(props.money?.one.eur * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇬🇧 영국(GBP): {(props.money?.one.gbp * 1000).toFixed(2)}{" "}
          </F.Country>
        </F.Box>

        <F.Box>
          <F.Country>
            🇨🇭 스위스(CHF): {(props.money?.one.chf * 1000).toFixed(2)}
          </F.Country>
          <F.Country>
            🇨🇦 캐나다(CAD): {(props.money?.one.cad * 1000).toFixed(2)}
          </F.Country>
          <F.Country>
            🇳🇿 뉴질랜드(NZD): {(props.money?.one.nzd * 1000).toFixed(2)}
          </F.Country>
          <F.Country>
            🇭🇰 홍콩(HKD): {(props.money?.one.hkd * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇧🇷 브라질(BRL): {(props.money?.one.brl * 1000).toFixed(2)}
          </F.Country>
        </F.Box>

        <F.Box>
          <F.Country>
            🇵🇹 터키(TRY): {(props.money?.one.try * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇷🇺 러시아(RUB): {(props.money?.one.rub * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇹🇼 대만(TWD): {(props.money?.one.twd * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇵🇭 필리핀(PHP): {(props.money?.one.php * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇸🇪 스웨덴(SEK): {(props.money?.one.sek * 1000).toFixed(2)}{" "}
          </F.Country>
        </F.Box>

        <F.Box>
          <F.Country>
            🇦🇺 호주(AUD): {(props.money?.one.aud * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇸🇬 싱가포르(SGD): {(props.money?.one.sgd * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇹🇭 태국(THB): {(props.money?.one.thb * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇪🇬 이집트(EGP): {(props.money?.one.egp * 1000).toFixed(2)}{" "}
          </F.Country>
          <F.Country>
            🇧🇳 브루나이(BND): {(props.money?.one.bnd * 1000).toFixed(2)}{" "}
          </F.Country>
        </F.Box>
      </F.TotalBox>
    </F.Wrapper>
  );
}
