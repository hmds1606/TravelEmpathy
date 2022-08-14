import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0em;

  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;

export const CommentTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 2em;
`;

export const TitlePicture = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 1em;

  @media ${breakPoints.mobile} {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
  }
`;

export const Title = styled.p`
  margin-bottom: 0;
  font-size: 1.5em;

  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentResultBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const NameRatingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15%;

  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Name = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2em;
`;

export const Rating = styled.div`
  width: 20%;
`;

export const Contents = styled.div`
  width: 60%;
  overflow: hidden;
  word-wrap: break-word;
  font-size: 1.2em;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Date = styled.div`
  width: 15%;
  font-size: 1.2em;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const EditDeleteBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1em;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Delete = styled.img`
  height: 1.4em;
  border: 0px;
  cursor: pointer;
`;

export const Edit = styled.img`
  height: 1.7em;
  border: 0px;
  cursor: pointer;
`;

export const Dom = styled.div`
  width: 100%;
  overflow: auto;
`;
