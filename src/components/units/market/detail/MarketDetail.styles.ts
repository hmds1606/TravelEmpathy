import styled from "@emotion/styled";
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
  /* height: 1250px; */
  margin: 100px 100px 50px 100px;
  box-shadow: 0px 4px 20px rgba(53, 66, 89, 0.2);
  /* border-radius: 30px; */
  padding: 70px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  background-color: white;

  @media ${breakPoints.mobile} {
    padding: 1em;
    margin: 2em 0em;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  /* background-color: #ff0000; */
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: #ffff00; */
`;

export const InfoNameDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InfoName = styled.h1`
  margin-bottom: 0em;
  height: 36px;
  font-size: 24px;
  font-weight: 500;
`;

export const InfoDate = styled.p`
  margin-bottom: 0em;
  height: 24px;
  font-size: 16px;
`;

export const ProductBox = styled.div`
  width: 100%;
  /* height: 400px; */
  display: flex;
  flex-direction: row;
  padding: 2em 0em;
  /* background-color: #ffff00; */

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const ProductImage = styled.div`
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const NoImage = styled.img`
  width: 10em;
  height: 10em;
`;
export const ProductInfo = styled.div`
  width: 60%;
  /* height: 300px; */
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-left: 0em;
  }
`;

export const ProductName = styled.h1`
  margin-bottom: 0em;
  font-size: 30px;
  font-weight: 600;
`;

export const Price = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #354259;
`;

export const TagLikeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const Tag = styled.div`
  width: 350px;
  /* height: 50px; */
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: greenyellow; */
`;

export const Tags = styled.div`
  height: 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #c4d7e0;
  margin-right: 10px;
  border-radius: 20px;
  padding: 10px;
  font-size: 17px;
`;

export const LikeBox = styled.div`
  width: 90px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
`;

export const LikeIcon = styled.p`
  margin-bottom: 0em;
  font-size: 1.3em;
  cursor: pointer;
`;

export const LikeCount = styled.p`
  margin-bottom: 0em;
  width: 50px;
  font-size: 1.3em;
  font-weight: 600;
  /* color: #eb2f96; */
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: purple; */
`;

export const BasketButton = styled.button`
  width: 48%;
  height: 50px;
  border: none;
  background-color: #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #ef9f9f90;
  }
`;

export const BuyButton = styled.button`
  width: 48%;
  height: 50px;
  border: none;
  background-color: #bdbdbd;
  cursor: pointer;

  :hover {
    background-color: #ef9f9f90;
  }
`;

export const Summary = styled.div`
  width: 100%;
  /* height: 80px; */
  font-size: 25px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #ff0000; */
  border-top: 2px solid #bdbdbd;
  padding: 1em 0em;
`;

export const ContentsImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  /* align-items: center; */
`;

export const Contents = styled.div`
  width: 100%;
  /* height: 150px; */
  /* height: 350px; */
  /* background-color: #c2ded130; */
  font-size: 40px;
  padding: 1em 0em;
`;

export const LocationBox = styled.div`
  width: 100%;
  /* height: 350px; */
  /* background-color: #fbded0; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LocationTitle = styled.div``;

export const Location = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #cdc2ae;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LocationDetailBox = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const LocationDetail = styled.div`
  font-size: 17px;
  margin-right: 10px;
`;

export const PutterButtonBox = styled.div`
  /* width: 350px; */
  width: 100%;
  height: 150px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  gap: 2em;
`;

export const Button = styled.button`
  width: 11em;
  height: 50px;
  align-self: center;
  border: none;
  background-color: #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #ef9f9f90;
  }

  @media ${breakPoints.mobile} {
    width: 8em;
  }
`;
