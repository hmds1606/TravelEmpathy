import styled from "@emotion/styled";
import { Image } from "antd";
import ReactPlayer from "react-player";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;

  @media ${breakPoints.mobile} {
    margin-top: 1em;
  }
`;

export const Wrapper = styled.section`
  width: 70%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 90%;
    box-shadow: none;
    padding: 1em;
  }
`;

export const MainTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoNameDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InfoName = styled.p`
  font-size: 1.7em;
  font-weight: 500;
  margin-bottom: 0em;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const InfoDate = styled.p`
  font-size: 1.2em;
  margin-bottom: 0em;

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
  }
`;

export const LinkLocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    justify-content: flex-start;
    margin-top: 1em;
  }
`;

export const Location = styled.img`
  width: 2.5em;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const LocationDetail = styled.p`
  margin-bottom: 0em;
  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const Title = styled.p`
  width: 100%;
  font-size: 2.5em;
  font-weight: 700;
  padding: 1em;
  margin-bottom: 0em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    font-size: 1.7em;
    padding: 1em 0em;
  }
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0em 0em 2em 0em;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const ImageDetail = styled(Image)`
  width: 100%;
  height: 20em;
  padding: 0.5em;
`;

export const Contents = styled.p`
  width: 100%;
  font-size: 1.5em;
  font-weight: 400;
  overflow: hidden;
  word-wrap: break-word;
`;

export const VideoGoodBadBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0em 15em;

  @media ${breakPoints.tablet} {
    padding: 0em 5em;
  }

  @media ${breakPoints.mobile} {
    padding: 0em;
  }
`;

export const VideoDetail = styled(ReactPlayer)`
  margin: 3em 0em;
`;

export const GoodBadBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
  gap: 3em;
`;

export const Good = styled.div`
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffd600;
`;
export const LikePicture = styled.img`
  width: 2.3em;
  height: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const BadPicture = styled.img`
  width: 2.3em;
  height: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Count = styled.p`
  font-size: 1.5em;
  height: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0em;
`;

export const Bad = styled.div`
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #828282;
`;

export const ButtonBox = styled.div`
  width: 70%;
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3em;

  @media ${breakPoints.mobile} {
    width: 80%;
    justify-content: space-between;
    gap: 1em;
  }
`;

export const Button = styled.button`
  width: 12em;
  height: 3.5em;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  :hover {
    background-color: #ef9f9f90;
    border-color: white;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
`;
