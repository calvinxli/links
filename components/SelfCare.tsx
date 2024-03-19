"use client";
import LinkList, { LinkListItem, LinkListProps } from "@/components/LinkList";
import { Space, Typography } from "antd";
import React, { CSSProperties } from "react";
import { spaceStyle } from "./Constants";
import { LinkTabProps } from "./Props";

const { Text } = Typography;

const skincareLabel = "Skincare";

const skincareLinks: LinkListItem[] = [
  {
    title: "Cleanser",
    link: "https://amzn.to/3F3gOAl",
    alt: "Puri Cleansing Wash, Facial Cleanser",
  },
  {
    title: "Moisturizer",
    link: "https://amzn.to/46e9vRN",
    alt: "Summer Fridays Cloud Dew Gel Cream",
  },
  {
    title: "Sunscreen",
    link: "https://amzn.to/46fVuTx",
    alt: "AHC Natural Perfection Double Shield Sun Stick",
  },
];

const hairLinks: LinkListItem[] = [
  {
    title: "Styling Iron",
    link: "https://amzn.to/3PrHZt8",
  },
  {
    title: "Heat Protectant",
    link: "https://amzn.to/3MEXHjU",
  },
  {
    title: "Hair Spray",
    link: "https://amzn.to/48ilD62",
  },
];

type GearProps = { style?: CSSProperties | undefined };

const SelfCare: React.FunctionComponent<LinkTabProps> = (
  props: LinkTabProps
) => {
  const links: LinkListProps[] = [
    {
      label: skincareLabel,
      items: skincareLinks,
      defaultActiveKey: skincareLabel,
    },
    { label: "Skincare", items: skincareLinks },
    { label: "Hair", items: hairLinks },
  ];

  return (
    <div style={props.style}>
      <Space direction="vertical" size={2} style={spaceStyle}>
        <Text>
          This is the stuff I use. I try to keep this updated but if you don't
          see what you're looking for, just ask!
        </Text>
      </Space>
      {links.map((link) => (
        <LinkList
          key={link.label}
          label={link.label}
          items={link.items}
          defaultActiveKey={link.defaultActiveKey}
        />
      ))}
    </div>
  );
};

export default SelfCare;
