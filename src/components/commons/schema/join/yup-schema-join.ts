import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .required("이름은 필수 입력 사항입니다.")
    .max(5, "이름은 5글자 이내로 작성해 주세요."),
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요."),
  passwordConfirm: yup
    .string()
    .required("비밀번호확인은 필수 입력 사항압니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});
