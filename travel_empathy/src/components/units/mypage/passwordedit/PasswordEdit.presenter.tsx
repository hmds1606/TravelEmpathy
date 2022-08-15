import SquareButton from "../../../commons/buttons/square";
import PasswordEditInput from "../../../commons/inputs/passwordeditinput";
import * as F from "./PasswordEdit.styles";
import { IPasswordEditPresenterPageProps } from "./PasswordEdit.types";

export default function PasswordEditPresenterPage(
  props: IPasswordEditPresenterPageProps
) {
  return (
    <F.Container onClick={props.handleSubmit(props.onClickPasswordEdit)}>
      <F.Wrapper>
        <F.Title>비밀번호 변경</F.Title>
        <F.Body>
          <F.Inputs>
            <F.BodyTitle>현재 비밀번호</F.BodyTitle>
            <F.InputErrorBox>
              <PasswordEditInput
                type="password"
                register={props.register("nowpassword")}
              />
              <F.Error>{props.formState.errors.nowpassword?.message}</F.Error>
            </F.InputErrorBox>
          </F.Inputs>
          <F.Inputs>
            <F.BodyTitle>새 비밀번호</F.BodyTitle>
            <F.InputErrorBox>
              <PasswordEditInput
                type="password"
                register={props.register("password")}
              />
              <F.Error>{props.formState.errors.password?.message}</F.Error>
            </F.InputErrorBox>
          </F.Inputs>
          <F.Inputs>
            <F.BodyTitle>새 비밀번호 확인</F.BodyTitle>
            <F.InputErrorBox>
              <PasswordEditInput
                type="password"
                register={props.register("passwordConfirm")}
              />
              <F.Error>
                {props.formState.errors.passwordConfirm?.message}
              </F.Error>
            </F.InputErrorBox>
          </F.Inputs>
          <F.ButtonBox>
            <SquareButton
              isActive={props.formState.isValid}
              title="비밀번호 변경하기"
            ></SquareButton>
          </F.ButtonBox>
        </F.Body>
      </F.Wrapper>
    </F.Container>
  );
}
