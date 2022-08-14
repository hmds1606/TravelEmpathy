import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #c2ded130; */
  padding-left: 10em;

  @media ${breakPoints.mobile} {
    padding-left: 0em;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  margin: 100px;
  box-shadow: 0px 4px 20px rgba(53, 66, 89, 0.2);
  padding: 70px 100px;
  background-color: white;

  @media ${breakPoints.mobile} {
    margin: 2em;
    padding: 2em;
  }
`;

export const Title = styled.h1`
  width: 100%;
  /* width: 200px; */
  height: 80px;
  border-bottom: 3px solid #35425980;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;

export const WriterPWBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2em 0em 1em 0em;

  > div {
    width: 50%;
    display: flex;
    flex-direction: row;

    @media ${breakPoints.mobile} {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const NameInputBox = styled.div`
  width: 80%;
  /* height: 60px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* background-color: red; */

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Name = styled.h3`
  width: 20%;
  height: 50px;
  font-size: 1.3em;
  padding-left: 1em;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0em;
    height: 2em;
  }
`;

export const Errors = styled.p`
  margin: 0.5em 0em 0em 0.5em;
  font-size: 0.8em;
  color: red;
`;

export const InputInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  /* background-color: pink; */

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const SubTitle = styled.h3`
  width: 10%;
  height: 50px;
  font-size: 1.3em;
  padding-left: 1em;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0em;
    height: 2em;
  }
`;

export const Tag = styled.div`
  width: 112.5%;
  height: 50px;
  /* padding: 10px; */
  border: none;
  /* border-top: 1px solid #cdc2ae; */

  border-bottom: 1px solid #cdc2ae;
  border-left: 1px solid #cdc2ae;
  border-right: 1px solid #cdc2ae;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const LocationBox = styled.div`
  width: 90%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    width: 100%;

    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 14px 16px;
  width: 124px;
  height: 52px;
  color: white;
  background-color: black;
  cursor: pointer;
  border: none;
`;

export const ImgWrapper = styled.div`
  margin: 1em 0em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Map = styled.div`
  width: 60%;
  height: 300px;
  border: 1px solid #cdc2ae;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Location = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 2em;
  /* background-color: pink; */

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 0em;
  }
`;

export const latlng = styled.div`
  color: white;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SubmitButtonBox = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
