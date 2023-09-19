"use client";
import React, { CSSProperties } from "react";
import { Typography, Space } from "antd";
import LinkList, { LinkListItem } from "@/components/LinkList";

const { Text, Title } = Typography;

type HomeProps = { style?: CSSProperties | undefined };

const keyboardLinks: LinkListItem[] = [
  {
    title: "OTG Keyboard",
    subtitle: "Lofree Flow | 10% OFF CODE: calvinxli",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
    alt: "Lofree Flow",
  },
  {
    title: "Work Keyboard",
    subtitle: "keydous NJ80-AP | brass plate, gateron pro brown",
    link: "https://amzn.to/3Pz4PjR",
    alt: "Lofree",
  },
  {
    title: "Work Keycaps",
    link: "https://amzn.to/3r8uJ4y",
    alt: "Mint PBT XDA Keycaps",
  },
  {
    title: "Home Keyboard",
    subtitle: "ASUS ROG Azoth 75%",
    link: "https://amzn.to/3Pxibx6",
    alt: "Home Keyboard - ASUS Rog Azoth 75%",
  },
  {
    title: "Home Keycaps",
    link: "https://s.click.aliexpress.com/e/_Dn3qOE3",
    alt: "EVA-01 PBT XDA Keycaps",
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
          This is the stuff I use. I try to keep this updated but if you don't
          see what you're looking for, just ask!
        </Space>
        <LinkList header="Keyboards" items={keyboardLinks} />
        <LinkList header="Office (non-keyboards)" items={officeGearLinks} />
        <Space style={{ textAlign: "center", margin: "10px" }}>
          As an Amazon Associate I earn from qualifying purchases.
          <br />I may earn a commission at no cost to you, if you purchase
          item(s) through the product links above.
        </Space>
      </div>
    );
  }
}

export default Products;
