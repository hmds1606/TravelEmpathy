import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import BoardCreatePresenter from "./BoardCreate.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardCreate.queries";
import { Modal } from "antd";
import { IProps, IObj } from "./BoardCreate.types";

export default function BoardCreateContainer(props: IProps) {
  const [isActive, setIsActive] = useState<any>("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imageUrl, setImageUrl] = useState(["", "", ""]);

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setErrorWriter("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setErrorPassword("");
    }
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setErrorTitle("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setErrorContents("");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  // ?????? ?????? ??? ????????? ???
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onClickSignup = async () => {
    if (writer === "") {
      setErrorWriter("????????? ?????? ??????????????????.");
    }
    if (password === "") {
      setErrorPassword("??????????????? ?????? ??????????????????.");
    }
    if (title === "") {
      setErrorTitle("????????? ?????? ??????????????????.");
    }
    if (contents === "") {
      setErrorContents("????????? ?????? ??????????????????.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: imageUrl,
            },
          },
        });
        Modal.success({ content: "???????????? ?????????????????????!" });

        router.push("/board/" + result.data.createBoard._id);
      } catch (error) {
        Modal.error({ content: (error as Error).message });
      }
    }
  };

  const onClickUpdateButton = async () => {
    const currentFiles = JSON.stringify(imageUrl);
    const defaultFiles = JSON.stringify(props.boardData.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
    ) {
      alert("????????? ????????? ????????????");
      return;
    }

    if (!password) {
      alert("??????????????? ??????????????????");
      return;
    }

    const obj: IObj = {
      variables: { password, boardId: router.query._id, updateBoardInput: {} },
    }; //?????? ?????? ?????? ?????? ?????? ???

    if (title !== "") {
      //???????????? ?????? ???????????? ???????????? ???????????? ????????? ?????? ????????? ??? ?????? updateBoardInput:{}??? ??????????????? ???????????? ????????????
      obj.variables.updateBoardInput.title = title;
    }
    if (contents !== "") {
      obj.variables.updateBoardInput.contents = contents;
    }

    if (youtubeUrl !== "") {
      obj.variables.updateBoardInput.youtubeUrl = youtubeUrl;
    }

    if (zipcode || address || addressDetail) {
      obj.variables.updateBoardInput.boardAddress = {};

      if (zipcode !== "") {
        obj.variables.updateBoardInput.zipcode = zipcode;
      }

      if (address !== "") {
        obj.variables.updateBoardInput.address = address;
      }

      if (addressDetail !== "") {
        obj.variables.updateBoardInput.addressDetail = addressDetail;
      }
    }
    if (isChangedFiles) obj.variables.updateBoardInput.images = imageUrl;

    try {
      const result = await updateBoard(obj);

      Modal.success({ content: "????????? ????????? ?????????????????????!" });

      router.push("/board/" + result.data.updateBoard._id);
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  const onChangeImageUrls = (fileUrl: string, index: number) => {
    const newImageUrl = [...imageUrl];
    newImageUrl[index] = fileUrl;
    setImageUrl(newImageUrl);
  };

  // ????????? ???????????????
  useEffect(() => {
    if (props.boardData?.fetchBoard.images?.length) {
      setImageUrl([...props.boardData?.fetchBoard.images]); //????????? ????????? ?????? ??????????????? ?????????
    }
  }, [props.boardData]);

  return (
    <BoardCreatePresenter
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSignup={onClickSignup}
      isActive={isActive}
      isEdit={props.isEdit}
      boardData={props.boardData}
      onClickUpdateButton={onClickUpdateButton}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      imageUrl={imageUrl}
      onChangeImageUrls={onChangeImageUrls}
    />
  );
}
