import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .required("상품명은 필수 입력 사항입니다.")
    .max(10, "상품명은 10글자 이내로 작성해주세요."),
  price: yup
    .number()
    .required("가격은 필수 입력 사항입니다.")
    .typeError("가격은 숫자만 입력가능합니다."),
  remarks: yup
    .string()
    .required("한줄요약은 필수 입력 사항입니다.")
    .max(50, "한줄요약은 50글자 이내로 작성해주세요."),
  contents: yup
    .string()
    .required("내용은 필수 입력 사항입니다.")
    .max(1000, "내용은 1000글자 이내로 작성해주세요."),
  address: yup.string(),
});
