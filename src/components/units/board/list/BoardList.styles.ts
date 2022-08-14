import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  margin-bottom: 0em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;

export const SearchBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0em 2em 0em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 9em;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleSearch = styled.input`
  width: 58%;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 1em;
  border: 0px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }
`;

export const Between = styled.p`
  height: 52px;
  margin-bottom: 0em;
  color: #bdbdbd;
  font-size: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${breakPoints.mobile} {
    height: 40px;
  }
`;

export const SearchBtn = styled.button`
  width: 9%;
  height: 52px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }
`;

export const List = styled.div`
  width: 70%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const FixedTitle = styled.div`
  font-size: 1.3em;
  height: 2.5em;
  background-color: #c4d7e0;
  border-bottom: 1.5px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6.7em;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 0.9em;
    padding-left: 2em;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  width: 100%;
  height: 3.5em;
  background-color: #354259;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const MyRow = styled.div`
  display: flex;
  width: 100%;
  height: 3.5em;
  :hover {
    cursor: pointer;
  }
`;

export const MyColumn = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid #bdbdbd;
  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    font-size: 0.9em;
  }
`;

interface IisMatchedProps {
  isMatched: boolean;
}

export const Word = styled.div`
  font-size: 1em;
  color: ${(props: IisMatchedProps) => (props.isMatched ? "skyblue" : "black")};
`;

export const FooterBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 3em;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 2em 0em;
  }
`;

export const PaginationBox = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CreateButtonBox = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Pagination = styled.div`
  font-size: 55px;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Button = styled.button`
  width: 10em;
  height: 50px;
  font-weight: 500;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;
