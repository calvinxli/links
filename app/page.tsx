"use client";
import Gear from "@/components/Gear";
import Home from "@/components/Home";
import type { TabsProps } from "antd";
import { ConfigProvider, Space, Tabs, Typography, theme } from "antd";
import { CSSProperties } from "react";

const { Title, Text, Paragraph } = Typography;

const sidePadding = 20;
const sidePaddingStyle: CSSProperties = {
  paddingLeft: sidePadding,
  paddingRight: sidePadding,
};

export const spaceStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 16,
  fontSize: 12,
};

const footer = (
  <Space size={0} direction="vertical" style={spaceStyle}>
    <Paragraph>
      This website is built and maintained by me! Please let me know if you
      discover a bug.
    </Paragraph>
    <Paragraph>
      As an Amazon Associate I earn from qualifying purchases. I may earn a
      commission at no cost to you, if make purchases through links on this
      website.
    </Paragraph>
  </Space>
);

const items: TabsProps["items"] = [
  {
    key: "home",
    label: "Home",
    children: (
      <>
        <Home style={sidePaddingStyle} />
        {footer}
      </>
    ),
  },
  {
    key: "gear",
    label: "Gear",
    children: (
      <>
        <Gear style={sidePaddingStyle} />
        {footer}
      </>
    ),
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
      tabBarStyle={{ ...sidePaddingStyle, fontWeight: "bold" }}
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
