import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
`;

export const CommentWrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0em;

  @media ${breakPoints.mobile} {
    width: 80%;

    margin-bottom: 1em;
  }
`;

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
  gap: 1em;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Writer = styled.input`
  width: 12em;
  height: 3.5em;
  border: 1px solid #bdbdbd;
  padding: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 3em;
  }
`;

export const Password = styled.input`
  width: 12em;
  height: 3.5em;
  border: 1px solid #bdbdbd;
  padding: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 3em;
  }
`;

export const Star = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentInputBox = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 8em;
  padding: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  outline: none;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Count = styled.div`
  padding: 10px;
  color: #bdbdbd;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 8em;
  height: 52px;
  border: none;
  font-weight: 500;
  font-size: 1.2em;
  background-color: black;
  color: white;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 5em;
    font-size: 1em;
  }
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
