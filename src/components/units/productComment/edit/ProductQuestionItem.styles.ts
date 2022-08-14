import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 10em;

  @media ${breakPoints.mobile} {
    padding-left: 0em;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapWriteComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 2em;
`;

export const WrapWritedHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const WrapFrontHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentWriter = styled.h1`
  margin-bottom: 0em;
  padding-right: 18px;
  font-weight: 500;
  font-size: 1.2em;
`;

export const WrapBackHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

export const Answer = styled.img`
  width: 1.6em;
  height: 1.6em;
  cursor: pointer;
`;

export const Pencil = styled.img`
  width: 1.6em;
  height: 1.6em;
  cursor: pointer;
`;

export const Delete = styled.img`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`;

export const Contents = styled.div`
  font-size: 1.3em;
  padding-bottom: 1em;
`;

export const Date = styled.div`
  font-size: 1em;
`;
