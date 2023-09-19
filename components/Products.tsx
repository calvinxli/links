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

const everydayCarryLinks: LinkListItem[] = [
  {
    title: "Backpack",
    link: "https://amzn.to/3EKLshA",
    alt: "Peak Design Everyday Backpack V2 20L",
  },
  {
    title: "Noise Cancelling Earbuds",
    subtitle: "Sony WF-1000XM4",
    link: "https://amzn.to/3EKOJh2",
    alt: "Noise Cancelling Earbuds",
  },
];

const recordingLinks: LinkListItem[] = [
  {
    title: "Phone",
    subtitle: "backup cam",
    link: "https://amzn.to/44RRJTe",
    alt: "Pixel 7 Pro Phone",
  },
  {
    title: "Video Camera",
    link: "https://amzn.to/3rhI6zq",
    alt: "Sony ZV-1 Vlogging Camera",
  },
  {
    title: "Camera-mount microphone",
    link: "https://amzn.to/48lW0kL",
    alt: "Rode VideoMicro II Camera-mount Compact Shotgun Microphone",
  },
  {
    title: "Microphone",
    subtitle: "for voice-over",
    link: "https://amzn.to/452AXkm",
    alt: "Shure SM7B Dynamic Microphone",
  },
  {
    title: "Microphone Arm",
    link: "https://amzn.to/44YhAch",
    alt: "Elgato Wave Mic Arm LP",
  },
];

const clothingLinks: LinkListItem[] = [
  {
    title: "Graphene-X",
    subtitle: "10% OFF CODE: IMPACC",
    link: "https://www.graphene-x.com/products/jogger-x-pants?rfsn=7014375.01f8a11",
    alt: "Graphene-X",
  },
];

const skincareLinks: LinkListItem[] = [
  {
    title: "Cleanser",
    subtitle: "night only",
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
    title: "Hair Cream",
    link: "https://amzn.to/48jjYgA",
  },
  {
    title: "Hair Spray",
    link: "https://amzn.to/48ilD62",
  },
  {
    title: "Dry Shampoo",
    link: "https://amzn.to/3PgwBjO",
  },
];

const healthLinks: LinkListItem[] = [
  {
    title: "Gruns Nutrition",
    subtitle: "20% OFF with this link",
    link: "https://gruns.co/pages/vip?snowball=CALVIN05232",
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
        <LinkList header="Everyday Carry" items={everydayCarryLinks} />
        <LinkList header="Recording" items={recordingLinks} />
        <LinkList header="Clothing" items={clothingLinks} />
        <LinkList header="Skincare" items={skincareLinks} />
        <LinkList header="Hair" items={hairLinks} />
        <LinkList header="Health" items={healthLinks} />
        <Space style={{ textAlign: "center", margin: "10px" }}>
          <Text>As an Amazon Associate I earn from qualifying purchases.</Text>
          <Text>
            I may earn a commission at no cost to you, if you purchase item(s)
            through the product links above.
          </Text>
        </Space>
      </div>
    );
  }
}

export default Products;
