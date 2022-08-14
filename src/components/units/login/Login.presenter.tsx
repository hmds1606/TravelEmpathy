import * as F from "./Login.styles";
import StandardInput from "../../commons/inputs/standard";
import StandardButton from "../../commons/buttons/standard";
import { ILoginPresenterPageProps } from "./Login.types";

export default function LoginPresenterPage(props: ILoginPresenterPageProps) {
  return (
    <F.Background>
      <F.Wrapper>
        <F.TitleBox>
          <F.TitleIcon src="/img/login/로고.png" />
        </F.TitleBox>

        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <F.ContentsBox>
            <div>
              <F.ContentsInnerBox>
                <F.ContentsIcon src="/img/login/email.png" />
                <StandardInput
                  type="text"
                  placeholder="이메일 주소를 입력해주세요"
                  register={props.register("email")}
                />
              </F.ContentsInnerBox>
              <F.Error>{props.formState.errors.email?.message}</F.Error>
            </div>

            <div>
              <F.ContentsInnerBox>
                <F.ContentsIcon src="/img/login/password.png" />
                <StandardInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  register={props.register("password")}
                />
              </F.ContentsInnerBox>
              <F.Error>{props.formState.errors.password?.message}</F.Error>
            </div>
          </F.ContentsBox>
          <F.ButtonBox>
            <StandardButton isActive={props.formState.isValid} title="로그인" />
          </F.ButtonBox>
        </form>

        <F.Footer>
          <F.FooterContentsBox>
            <F.Question>계정이 없으신가요? </F.Question>
            <F.Answer onClick={props.onClickJoin}>회원가입</F.Answer>
          </F.FooterContentsBox>
          <F.FooterContentsBox>
            <F.Question>비밀번호를 잊으셨나요? </F.Question>
            <F.Answer>비밀번호 재설정</F.Answer>
          </F.FooterContentsBox>
        </F.Footer>
      </F.Wrapper>
    </F.Background>
  );
}
