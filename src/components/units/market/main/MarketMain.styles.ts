import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  padding-left: 17em;

  @media ${breakPoints.mobile} {
    padding-left: 0em;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;

  @media ${breakPoints.mobile} {
    font-size: 1.8em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 7em;
  height: 3em;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 2em;
`;

export const Left = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MyRow = styled.div`
  background-color: white;
  width: 16.5em;
  height: 22em;
  float: left;
  margin: 0em 2em 2em 0em;
  border: 1px solid #555555;
  :hover {
    cursor: pointer;
  }

  @media ${breakPoints.mobile} {
    margin: 0em 0em 2em 0em;
  }
`;

export const Picture = styled.img`
  width: 16.37em;
  height: 15em;
  background-color: gray;
`;

export const NoImageBox = styled.div`
  width: 16.4em;
  height: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoImage = styled.img`
  width: 8em;
  height: 8em;
`;

export const Info = styled.div`
  width: 16.4em;
  height: 7em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3em;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoName = styled.h3`
  font-weight: 600;
  font-size: 1.3em;
`;

export const Etc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.h3`
  margin-bottom: 0em;
  font-weight: 600;
  font-size: 1.2em;
`;

export const Date = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: #bdbdbd;
`;
