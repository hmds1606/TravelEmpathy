import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0em 0em 3em 0em;
`;

export const WrapTitle = styled.div`
  display: flex;
  padding-bottom: 1em;
`;

export const TitlePicture = styled.img`
  width: 1.5em;
  height: 1.5em;
`;

export const Title = styled.p`
  margin-bottom: 0em;
  padding-left: 0.5em;
  font-size: 1.2em;
`;

export const WrapperWriteComment = styled.div`
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
`;

export const WriteNum = styled.div`
  width: 90%;
  height: 52px;
  padding: 20px;
  border: 1px solid black;
`;

export const CommentButton = styled.button`
  width: 10%;
  height: 3em;
  border: none;
  background-color: black;
  color: white;
  font-weight: 500;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const EditButton = styled.button`
  width: 10%;
  height: 3em;
  border: none;
  background-color: #bdbdbd;
  color: black;
  font-weight: 500;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const Contents = styled.div`
  font-size: 16px;
`;

export const EditBackButton = styled.button`
  width: 10%;
  height: 52px;
`;
