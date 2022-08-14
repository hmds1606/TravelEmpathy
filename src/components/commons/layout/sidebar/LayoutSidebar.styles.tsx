import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Right = styled.div`
  width: 200px;
  padding: 50px;
  /* background-color: #ff0fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 7em;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const RightLine = styled.div`
  width: 180px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export const MyKey = styled.div`
  width: 130px;
  /* height: 160px; */
  display: flex;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 20px;
  border: 2px dotted #bdbdbd;
  padding: 8px;
`;

export const TodayPicture = styled.div`
  height: 100px;
  background-color: gray;
`;

export const MiniPicture = styled.img`
  width: 100%;
  height: 100px;
  background-color: gray;
`;

export const TodayNoImageBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodayNoImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const TodayInfo = styled.div`
  padding-top: 8px;
`;

export const MyContents = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
