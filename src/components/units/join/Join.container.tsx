import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import JoinPresenterPage from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";
import { Modal } from "antd";
import { schema } from "../../commons/schema/join/yup-schema-join";

export default function JoinContainerPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickJoin = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: `${result.data?.createUser.name}님 가입을 축하드립니다 🎉 `,
      });
      router.push("/login");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <JoinPresenterPage
      onClickJoin={onClickJoin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
