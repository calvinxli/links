"use client";
import React, { CSSProperties } from "react";
import { Image, Typography, Space } from "antd";
import LinkList, { LinkListItem } from "@/components/LinkList";

const { Text, Title } = Typography;

type HomeProps = { style?: CSSProperties | undefined };

const keyboardLinks: LinkListItem[] = [
  {
    title: "Work Keyboard",
    subtitle: "keydous NJ80-AP | brass plate, gateron pro brown",
    link: "https://amzn.to/3Pz4PjR",
    alt: "Lofree",
  },
  {
    title: "OTG Keyboard",
    subtitle: "Lofree Flow | 10% OFF CODE: calvinxli",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
    alt: "Lofree Flow",
  },
  {
    title: "Home Keyboard",
    subtitle: "ASUS ROG Azoth 75%",
    link: "https://amzn.to/3Pxibx6",
    alt: "Home Keyboard - ASUS Rog Azoth 75%",
  },
];

const officeGearLinks: LinkListItem[] = [
  {
    title: "Grovemade Desk Shelf",
    subtitle: "10% OFF code: IMPACC10",
    link: "https://grovemade.com/desk-shelf-system?rfsn=7165896.d6eb21",
    alt: "Grovemade",
  },
];

class Products extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <Space style={{ textAlign: "center", margin: "10px" }}>
          This is the stuff I use. I try to keep it updated but if you don't see
          what you're looking for, just ask :)
        </Space>
        <LinkList header="Keyboards" items={keyboardLinks} />
        <LinkList header="Office (non-keyboards)" items={officeGearLinks} />
      </div>
    );
  }
}

export default Products;
