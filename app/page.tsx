"use client";
import React, { CSSProperties } from "react";
import Home from "@/components/Home";
import { Tabs, ConfigProvider, Typography, theme, Row } from "antd";
import type { TabsProps } from "antd";
import Gear from "@/components/Gear";

const { Title } = Typography;

const sidePadding = "20px";
const childrenStyle: CSSProperties = {
  paddingLeft: sidePadding,
  paddingRight: sidePadding,
};

const items: TabsProps["items"] = [
  {
    key: "home",
    label: "Home",
    children: <Home style={childrenStyle} />,
  },
  {
    key: "gear",
    label: "Gear",
    children: <Gear style={childrenStyle} />,
  },
];

const HomePage = () => (
  <ConfigProvider
    theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],

      components: {
        Collapse: {
          contentBg: "black",
          contentPadding: "4px 4px 2px 4px",
        },
      },
    }}
  >
    <Tabs
      tabBarStyle={childrenStyle}
      defaultActiveKey={items[0].key}
      tabBarExtraContent={
        <Title level={3} aria-label="Calvin Li">
          Calvin Li
        </Title>
      }
      items={items}
    />
  </ConfigProvider>
);

export default HomePage;
