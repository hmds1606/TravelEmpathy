import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3em 0em;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0em;
  position: relative;
  animation: h1 2s;

  @keyframes h1 {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @media ${breakPoints.mobile} {
    font-size: 2.5em;
  }
`;

export const SubTitle = styled.h1`
  font-size: 2em;
  font-weight: 300;
  color: #a3a8b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em 0em 2em 0em;
  position: relative;
  animation: h1 2s;

  @keyframes h1 {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;

  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }

  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
`;

export const Img = styled.img`
  height: 32em;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;

  :hover {
    transition: all 1s ease;
    transform: scale(1.2);
    height: 32em;
    width: 100%;
    object-fit: cover;
  }

  @media ${breakPoints.mobile} {
    height: 12em;

    :hover {
      height: 12em;
    }
  }
`;

const ItemOpacity = keyframes`
to{
  background: none
}
`;

export const MoneyBox = styled.div`
  width: 23%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 32em;
    border-radius: 20px;
    letter-spacing: -0.05em;
    font-weight: 700;
    background-color: #ffffff99;
  }

  :hover {
    & > div {
      animation: ${ItemOpacity} 1s ease;
      animation-fill-mode: forwards;
      height: 32em;
    }
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;

    & > div {
      height: 12em;
    }

    :hover {
      & > div {
        height: 12em;
      }
    }
  }
`;

export const FreeBox = styled.div`
  width: 23%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;
  /* border: 1px solid #bdbdbd; */

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 32em;
    border-radius: 20px;
    letter-spacing: -0.05em;
    font-weight: 700;
    background-color: #ffffff99;
  }

  :hover {
    & > div {
      animation: ${ItemOpacity} 1s ease;
      animation-fill-mode: forwards;
      height: 32em;
    }
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;

    & > div {
      height: 12em;
    }

    :hover {
      & > div {
        height: 12em;
      }
    }
  }
`;

export const MarketBox = styled.div`
  width: 23%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 32em;
    border-radius: 20px;
    letter-spacing: -0.05em;
    font-weight: 700;
    background-color: #ffffff99;
  }

  :hover {
    & > div {
      animation: ${ItemOpacity} 1s ease;
      animation-fill-mode: forwards;
      height: 32em;
    }
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;

    & > div {
      height: 12em;
    }

    :hover {
      & > div {
        height: 12em;
      }
    }
  }
`;

export const MyPage = styled.div`
  width: 23%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 32em;
    border-radius: 20px;
    letter-spacing: -0.05em;
    font-weight: 700;
    background-color: #ffffff99;
  }

  :hover {
    & > div {
      animation: ${ItemOpacity} 1s ease;
      animation-fill-mode: forwards;
      height: 32em;
    }
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;

    & > div {
      height: 12em;
    }

    :hover {
      & > div {
        height: 12em;
      }
    }
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents1 = styled.p`
  margin-bottom: 0em;
  font-size: 1.5em;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const Contents2 = styled.p`
  margin-bottom: 0em;
  font-size: 1.5em;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const MoveTitle = styled.div`
  height: 2em;
  font-size: 2em;
  font-weight: 600;
  color: #3d3d3d;
  border-bottom: 2px solid #a3a8b7;
  margin-bottom: 1em;

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;
