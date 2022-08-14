import { Image } from "antd";
import * as F from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Upload01Presenter(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <F.Image
          onClick={props.onClickImage}
          //강아지 사진 있어도 파일 선택 창 나오도록 설정 onClickImage 동일하게
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <F.UploadBtn type="button" onClick={props.onClickImage}>
          + <br /> upload
        </F.UploadBtn>
      )}
      <F.File type="file" onChange={props.onChangeFile} ref={props.fileRef} />
    </>
  );
}
