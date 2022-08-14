import Upload01Presenter from "./Uploads01.presenter";
import { useRef, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { checkFileValidation } from "./Uploads01.validation";
import { Modal } from "antd";
import { IUploads01Props } from "./Uploads01.types";

export default function Upload01Container(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeImageUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: "이미지 등록에 실패했습니다." });
    }
  };

  return (
    <Upload01Presenter
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
    />
  );
}
