import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.form`
  width: 75%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 0em;
  height: 3em;
  font-size: 36px;
  font-weight: 700;
  padding: 1em 0em 0em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${breakPoints.mobile} {
    height: 22em;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const BodyTitle = styled.p`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    width: 50%;

    font-size: 1.1em;
  }
`;

export const InputErrorBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 60%;
  }
`;

export const Error = styled.div`
  height: 20px;
  color: red;
  font-size: 11px;
  font-weight: 500;
  padding-top: 5px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
