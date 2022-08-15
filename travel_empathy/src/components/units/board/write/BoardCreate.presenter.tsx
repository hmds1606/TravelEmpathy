import * as F from "./BoardCreate.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { IBoardCreatePresenterProps } from "./BoardCreate.types";
import Upload01Container from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardCreatePresenter(
  props: IBoardCreatePresenterProps
) {
  return (
    <F.Container>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}

      <F.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</F.Title>
      <F.Line></F.Line>
      <F.Wrapper>
        <F.WriterPWBox>
          <div>
            <F.Name>작성자</F.Name>
            <F.NameInputBox>
              <F.NameInput
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={props.onChangeWriter}
                defaultValue={props.boardData?.fetchBoard.writer}
                readOnly={props.isEdit}
              />
              <F.Errors>{props.errorWriter}</F.Errors>
            </F.NameInputBox>
          </div>
          <div>
            <F.Name>비밀번호</F.Name>
            <F.NameInputBox>
              <F.NameInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
                defaultValue={props.boardData?.fetchBoard.password}
              />
              <F.Errors>{props.errorPassword}</F.Errors>
            </F.NameInputBox>
          </div>
        </F.WriterPWBox>

        <F.InputInfo>
          <F.SubTitle>제목</F.SubTitle>
          <F.NameInputBox>
            <F.InputName2
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
              defaultValue={props.boardData?.fetchBoard.title}
            />
            <F.Errors>{props.errorTitle}</F.Errors>
          </F.NameInputBox>
        </F.InputInfo>

        <F.InputInfo>
          <F.SubTitle>내용</F.SubTitle>
          <F.NameInputBox>
            <F.InputName3
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContents}
              defaultValue={props.boardData?.fetchBoard.contents}
            />
            <F.Errors>{props.errorContents}</F.Errors>
            <F.ImgWrapper>
              {props.imageUrl.map((el: any, index: number) => (
                <Upload01Container
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeImageUrls={props.onChangeImageUrls}
                />
              ))}
            </F.ImgWrapper>
          </F.NameInputBox>
        </F.InputInfo>

        <F.InputInfo>
          <F.SubTitle>여행위치</F.SubTitle>
          <F.NameInputBox>
            <F.House>
              <F.InputName4
                type="text"
                placeholder="07250"
                readOnly
                value={
                  props.zipcode ||
                  props.boardData?.fetchBoard.boardAddress?.zipcode
                }
              />
              <F.Button onClick={props.onClickAddressSearch}>
                우편번호 검색
              </F.Button>
            </F.House>
            <F.HomeInfo
              readOnly
              value={
                props.address ||
                props.boardData?.fetchBoard.boardAddress?.address
              }
            />
            <F.HomeInfo
              placeholder="해외위치는 여기에 직접 입력해주세요."
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.boardData?.fetchBoard.boardAddress?.addressDetail
              }
            />
          </F.NameInputBox>
        </F.InputInfo>
        <F.InputInfo>
          <F.SubTitle>유튜브</F.SubTitle>
          <F.NameInputBox>
            <F.InputName2
              placeholder="링크를 입력해주세요."
              onChange={props.onChangeYoutubeUrl}
              defaultValue={props.boardData?.fetchBoard.youtubeUrl}
            ></F.InputName2>
          </F.NameInputBox>
        </F.InputInfo>

        <F.BtnWrapper>
          <F.JoinBtn
            onClick={
              props.isEdit ? props.onClickUpdateButton : props.onClickSignup
            }
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </F.JoinBtn>
        </F.BtnWrapper>
      </F.Wrapper>
    </F.Container>
  );
}
