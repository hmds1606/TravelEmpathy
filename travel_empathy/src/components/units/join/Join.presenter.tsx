import StandardButton from "../../commons/buttons/standard";
import BorderInput from "../../commons/inputs/borderinput";
import * as F from "./Join.styles";
import { IJoinPresenterPageProps } from "./Join.types";

export default function JoinPresenterPage(props: IJoinPresenterPageProps) {
  return (
    <>
      <F.Background>
        <F.Wrapper>
          <F.Title>회원가입</F.Title>

          <form onSubmit={props.handleSubmit(props.onClickJoin)}>
            <F.ContentsBox>
              <div>
                <F.ContentsInnerBox>
                  <F.ContentsTitle>이름</F.ContentsTitle>
                  <BorderInput type="text" register={props.register("name")} />
                </F.ContentsInnerBox>
                <F.Error>{props.formState.errors.name?.message}</F.Error>
              </div>

              <div>
                <F.ContentsInnerBox>
                  <F.ContentsTitle>이메일</F.ContentsTitle>
                  <BorderInput type="text" register={props.register("email")} />
                </F.ContentsInnerBox>
                <F.Error>{props.formState.errors.email?.message}</F.Error>
              </div>

              <div>
                <F.ContentsInnerBox>
                  <F.ContentsTitle>비밀번호</F.ContentsTitle>
                  <BorderInput
                    type="password"
                    register={props.register("password")}
                  />
                </F.ContentsInnerBox>
                <F.Error>{props.formState.errors.password?.message}</F.Error>
              </div>

              <div>
                <F.ContentsInnerBox>
                  <F.ContentsTitle>비밀번호 확인</F.ContentsTitle>
                  <BorderInput
                    type="password"
                    register={props.register("passwordConfirm")}
                  />
                </F.ContentsInnerBox>
                <F.Error>
                  {props.formState.errors.passwordConfirm?.message}
                </F.Error>
              </div>
            </F.ContentsBox>
            <F.ButtonBox>
              <StandardButton
                isActive={props.formState.isValid}
                title="회원가입하기"
              />
            </F.ButtonBox>
          </form>
        </F.Wrapper>
      </F.Background>
    </>
  );
}
