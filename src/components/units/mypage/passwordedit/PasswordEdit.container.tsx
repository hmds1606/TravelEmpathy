import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { schema } from "../../../commons/schema/passwordedit/yup-schema-passwordedit";
import PasswordEditPresenterPage from "./PasswordEdit.presenter";
import { LOGOUT_USER, RESET_USER_PASSWORD } from "./PasswordEdit.queries";

export default function PasswordEditContainerPage() {
  const router = useRouter();

  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickPasswordEdit = async (data: any) => {
    try {
      const result = await resetUserPassword({
        variables: {
          password: data.password,
        },
      });
      await logoutUser();
      localStorage.removeItem("accessToken");
      location.reload();
      Modal.success({
        content: "비밀번호 변경이 완료되었습니다. 다시 로그인해주세요.",
      });
      router.push("/login");
      console.log(result);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <PasswordEditPresenterPage
      onClickPasswordEdit={onClickPasswordEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
