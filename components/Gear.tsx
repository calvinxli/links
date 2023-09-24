"use client";
import React, { CSSProperties } from "react";
import { Typography, Space } from "antd";
import LinkList, { LinkListItem } from "@/components/LinkList";

const { Text } = Typography;
type GearProps = { style?: CSSProperties | undefined };

const KEYBOARDS_BASE_PATH = "/keyboards/";
const OFFICE_BASE_PATH = "/office/";
const EDC_BASE_PATH = "/edc/";

const keyboardLinks: LinkListItem[] = [
  {
    title: "OTG Keyboard",
    subtitle: "10% OFF code: calvinxli",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
    alt: "Lofree Flow",
    image: "/affiliates/lofree.png",
  },
  {
    title: "Work Keyboard",
    subtitle: "keydous NJ80-AP",
    link: "https://amzn.to/3Pz4PjR",
    alt: "keydous nj80-ap, brass plate, gateron pro brown switches",
    image: `${KEYBOARDS_BASE_PATH}work_keyboard.png`,
  },
  {
    title: "Work Keycaps",
    link: "https://amzn.to/3r8uJ4y",
    subtitle: "Mint Theme",
    alt: "Mint PBT XDA Keycaps",
    image: `${KEYBOARDS_BASE_PATH}work_keycaps.png`,
  },
  {
    title: "Home Keyboard",
    subtitle: "ASUS ROG Azoth 75%",
    link: "https://amzn.to/3Pxibx6",
    alt: "Home Keyboard - ASUS Rog Azoth 75%",
    image: `${KEYBOARDS_BASE_PATH}home_keyboard.png`,
  },
  {
    title: "Home Keycaps",
    link: "https://s.click.aliexpress.com/e/_Dn3qOE3",
    subtitle: "EVA-01 Theme",
    alt: "EVA-01 PBT XDA Keycaps",
    image: `${KEYBOARDS_BASE_PATH}home_keycaps.png`,
  },
];

const officeGearLinks: LinkListItem[] = [
  {
    title: "Grovemade Desk Shelf",
    subtitle: "10% OFF code: IMPACC10",
    link: "https://grovemade.com/desk-shelf-system?rfsn=7165896.d6eb21",
    alt: "Grovemade",
    image: "/affiliates/grovemade.png",
  },
];

const everydayCarryLinks: LinkListItem[] = [
  {
    title: "Backpack",
    link: "https://amzn.to/3EKLshA",
    subtitle: "Peak Design Everyday V2",
    alt: "Peak Design Everyday Backpack V2 20L",
    image: `${EDC_BASE_PATH}backpack.png`,
  },
  {
    title: "Noise Cancelling Earbuds",
    subtitle: "Sony WF-1000XM4",
    link: "https://amzn.to/3EKOJh2",
    alt: "Noise Cancelling Earbuds",
    image: `${EDC_BASE_PATH}earbuds.png`,
  },
];

const recordingLinks: LinkListItem[] = [
  {
    title: "Phone",
    subtitle: "Pixel 7 Pro",
    link: "https://amzn.to/44RRJTe",
    alt: "Pixel 7 Pro Phone",
  },
  {
    title: "Video Camera",
    subtitle: "Sony ZV-1",
    link: "https://amzn.to/3rhI6zq",
    alt: "Sony ZV-1 Vlogging Camera",
  },
  {
    title: "Camera-mount Microphone",
    subtitle: "Rode VideoMicro II",
    link: "https://amzn.to/48lW0kL",
    alt: "Rode VideoMicro II Camera-mount Compact Shotgun Microphone",
  },
  {
    title: "VO/VC Microphone",
    subtitle: "Shure SM7B",
    link: "https://amzn.to/452AXkm",
    alt: "Shure SM7B Dynamic Microphone",
  },
  {
    title: "Microphone Arm",
    subtitle: "Elgato Wave Mic Arm LP",
    link: "https://amzn.to/44YhAch",
    alt: "Elgato Wave Mic Arm LP",
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

class Gear extends React.Component<GearProps> {
  constructor(props: GearProps) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <Space style={{ textAlign: "center", margin: "10px", fontSize: 12 }}>
          This is the stuff I use. I try to keep this updated but if you don't
          see what you're looking for, just ask!
        </Space>
        <LinkList label={KEYBOARDS_LABEL} items={keyboardLinks} />
        <LinkList label="Office (non-keyboards)" items={officeGearLinks} />
        <LinkList label="Everyday Carry" items={everydayCarryLinks} />
        <LinkList label="Recording" items={recordingLinks} />
        <LinkList label="Skincare" items={skincareLinks} />
        <LinkList label="Hair" items={hairLinks} />
        <Space
          size={0}
          direction="vertical"
          style={{ textAlign: "center", marginBottom: 16 }}
        >
          <Text style={{ fontSize: 12 }}>
            As an Amazon Associate I earn from qualifying purchases.
            <br />I may earn a commission at no cost to you, if you purchase
            item(s) through the product links above.
          </Text>
        </Space>
      </div>
    );
  }
}

export const KEYBOARDS_LABEL = "Keyboards";

export default Gear;
