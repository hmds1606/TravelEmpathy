import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 90%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 1em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MyKey = styled.div`
  width: 100%;
  /* height: 160px; */
  display: flex;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  border: 1px dotted #bdbdbd;
  padding: 8px;
`;

export const TodayPicture = styled.div`
  width: 6em;
  height: 6em;
  background-color: gray;
  margin: 0em 3em;

  @media ${breakPoints.mobile} {
    margin: 0em;
  }
`;

export const MiniPicture = styled.img`
  width: 6em;
  height: 6em;
  background-color: gray;
`;

export const TodayNoImageBox = styled.div`
  width: 6em;
  height: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodayNoImage = styled.img`
  width: 6em;
  height: 6em;
`;

export const TodayInfo = styled.div`
  padding-top: 8px;
`;

export const MyNumber = styled.div`
  width: 10%;
  font-size: 1.8em;
  font-weight: 600;

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;

export const MyContents = styled.div`
  width: 30%;
  font-size: 1.8em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;

export const Notice = styled.p`
  margin: 2em 0em;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
