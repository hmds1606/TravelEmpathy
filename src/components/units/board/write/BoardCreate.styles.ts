import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 60%;
  margin: 1em 0em 0.5em 0em;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 90%;
    font-size: 30px;
  }
`;

export const Line = styled.div`
  width: 65%;
  border: 2px solid #35425980;
  margin-bottom: 2em;

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const Wrapper = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const WriterPWBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;

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
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Name = styled.h3`
  width: 20%;
  height: 50px;
  font-size: 1.3em;
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0em;
    height: 2em;
  }
`;

export const PasswordName = styled.h3`
  width: 20%;
  height: 50px;
  font-size: 1.3em;
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameInput = styled.input`
  height: 50px;
  border: 1px solid #bdbdbd;
  padding: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Errors = styled.p`
  margin: 0.5em 0em 0em 0.5em;
  font-size: 0.8em;
  color: red;
`;

export const WrapperInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const InputErrorBox = styled.div`
  width: 100%;
`;

export const Error = styled.div`
  font-size: 0.8em;
  color: red;
`;

export const PasswordInput = styled.input`
  width: 35em;
  height: 52px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;

export const InputInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SubTitle = styled.h3`
  width: 10%;
  height: 50px;
  font-size: 1.3em;
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0em;
    height: 2em;
  }
`;

export const InputName2 = styled.input`
  width: 112.5%;
  height: 50px;
  padding: 10px;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const InputName3 = styled.textarea`
  width: 112.5%;
  height: 25em;
  padding: 10px;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 15em;
  }
`;

export const InputName4 = styled.input`
  width: 77px;
  height: 52px;
  padding: 15px;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
`;

export const LocationBox = styled.div`
  width: 112.5%;
  background-color: yellow;
`;

export const House = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
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

export const HomeInfo = styled.input`
  width: 112.5%;
  height: 52px;
  margin-bottom: 1em;
  padding-left: 16px;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  margin: 1em 0em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

interface IIsActiveProps {
  isActive: boolean;
}

export const JoinBtn = styled.button`
  margin: 2em 0em 3em 0em;
  width: 15em;
  height: 4em;
  border: 0px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props: IIsActiveProps) =>
    props.isActive === true ? "#EF9F9F90" : "#bdbdbd"};
`;
