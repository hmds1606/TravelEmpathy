import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: 1em;
  width: 100%;
  margin-bottom: 1em;
  border: 1px dotted black;
  display: flex;
  flex-direction: row;

  & div {
    width: 100%;
    /* background-color: orange; */
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  /* margin-top: 20px; */
`;

export const Arrow = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 1em;
`;

export const WrapperComment = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
`;

export const WrapWriteComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
`;

export const WrapWritedHeader = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;

export const WrapFrontHeader = styled.span`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* background-color: yellow; */
`;

export const CommentWriter = styled.h1`
  margin-bottom: 0em;
  /* padding-right: 18px; */
  font-weight: 500;
  font-size: 16px;
`;

export const WrapBackHeader = styled.span`
  display: flex;
  /* flex-direction: row; */
  gap: 1em;
  /* background-color: orange; */
`;

export const Pencil = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  /* margin-right: 16px; */
`;

export const Delete = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Contents = styled.div`
  font-size: 16px;
  padding-bottom: 20px;
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  padding-top: 20px;
`;
