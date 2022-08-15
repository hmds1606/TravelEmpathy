import * as yup from "yup";

export const schema = yup.object({
  writer: yup
    .string()
    .required("작성자는 필수 입력 사항입니다.")
    .max(5, "작성자는 5글자 이내로 작성해주세요."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요."),
  title: yup
    .string()
    .required("제목은 필수 입력 사항입니다.")
    .max(50, "제목은 50글자 이내로 작성해주세요."),
  contents: yup
    .string()
    .required("내용은 필수 입력 사항입니다.")
    .max(1000, "내용은 1000글자 이내로 작성해주세요."),
});
