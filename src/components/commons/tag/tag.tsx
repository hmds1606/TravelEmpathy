import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export default function Tag(props: any) {
  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      //처음에 입력한 값
      if (props.tagList === undefined) {
        props.setTagList([e.target.value]);
        props.setTagItem("");
      } else {
        //추가로 입력한 값
        props.setTagList((prev: any) => [...prev, e.target.value]);
        props.setTagItem("");
      }
    }
  };

  const deleteTagItem = (e: any) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = props.tagList.filter(
      (tagItem: any) => tagItem !== deleteTagItem
    );
    props.setTagList(filteredTagList);
  };

  const onChangeInput = (e: any) => {
    props.setTagItem(e.target.value);
  };

  //수정시 useEffect
  useEffect(() => {
    if (props.marketData?.fetchUseditem !== undefined)
      props.setTagList([...props.marketData?.fetchUseditem.tags]);
  }, [props.marketData]);

  return (
    <TagBox>
      {props.tagList?.map((tagItem: any, index: number) => {
        return (
          <TagItem key={index}>
            <Text>{tagItem}</Text>
            <Button type="button" onClick={deleteTagItem}>
              X
            </Button>
          </TagItem>
        );
      })}
      <TagInput
        type="text"
        placeholder="태그를 입력해주세요."
        tabIndex={2}
        onChange={onChangeInput}
        value={props.tagItem}
        onKeyPress={onKeyPress}
      />
    </TagBox>
  );
}

const TagBox = styled.div`
  width: 900px;
  height: 52px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;

  &:focus-within {
    border-color: #c4d7e0;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #c4d7e0;
  border-radius: 5px;
  color: white;
  font-size: 13px;
  color: #000000;
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border: none;
  background-color: #c4d7e0;
  color: #000000;
`;

const TagInput = styled.input`
  width: 400px;
  border: none;
  outline: none;

  @media ${breakPoints.mobile} {
    width: 200px;
  }
`;
