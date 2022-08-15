import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  padding-left: 10em;
  margin-bottom: 3em;

  @media ${breakPoints.mobile} {
    padding-left: 0em;
  }
`;

export const FormBox = styled.form``;

export const Body = styled.div`
  width: 100%;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1em;
`;

export const TitlePicture = styled.img`
  width: 1.8em;

  @media ${breakPoints.mobile} {
    width: 1.5em;
  }
`;

export const Title = styled.p`
  margin-bottom: 0em;
  font-size: 1.3em;
  padding-left: 0.5em;

  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const WrapperWriteComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WriteContent = styled.input`
  height: 7em;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;

export const WriteFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CommentButton = styled.button`
  width: 10em;
  height: 3em;
  border: none;
  background-color: black;
  color: white;
  font-weight: 500;

  @media ${breakPoints.mobile} {
    width: 7em;
  }
`;

export const EditButton = styled.button`
  width: 10em;
  height: 3em;
  border: none;
  background-color: #bdbdbd;
  color: #000000;
  font-weight: 500;

  @media ${breakPoints.mobile} {
    width: 7em;
  }
`;

export const Contents = styled.div`
  font-size: 16px;
`;
