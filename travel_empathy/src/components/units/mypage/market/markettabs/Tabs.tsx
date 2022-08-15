import { Tabs } from "antd";
import React from "react";
import styled from "@emotion/styled";

const { TabPane } = Tabs;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 3em 0em 2em 0em;
`;

interface IMenuTabsProps {
  onChangeKey: (key: string) => void;
}

const MenuTabs = (props: IMenuTabsProps) => (
  <TabsWrapper>
    <Tabs defaultActiveKey="1" onChange={props.onChangeKey}>
      <TabPane tab="내가 올린 상품" key="1"></TabPane>
      <TabPane tab="내가 찜한 상품" key="2"></TabPane>
      <TabPane tab="상품 구매내역" key="3"></TabPane>
      <TabPane tab="상품 판매내역" key="4"></TabPane>
    </Tabs>
  </TabsWrapper>
);

export default MenuTabs;
