"use client";
import React, { CSSProperties } from "react";
import { Space } from "antd";
import LinkList, { LinkListItem } from "@/components/LinkList";

export const KEYBOARDS_LABEL = "Keyboards";

const keyboardsBasePath = "/keyboards/";
const recordingBasePath = "/recording/";
const desktopBasePath = "/desktop/";
const lightingBasePath = "/lighting/";
const edcBasePath = "/edc/";

const spaceStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 16,
  fontSize: 12,
};

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
    subtitle: "Keydous NJ80-AP",
    link: "https://amzn.to/3Pz4PjR",
    alt: "keydous nj80-ap, brass plate, gateron pro brown switches",
    image: `${keyboardsBasePath}work_keyboard.png`,
  },
  {
    title: "Work Keycaps",
    link: "https://amzn.to/3r8uJ4y",
    subtitle: "Mint Theme",
    alt: "Mint PBT XDA Keycaps",
    image: `${keyboardsBasePath}work_keycaps.png`,
  },
  {
    title: "Home Keyboard",
    subtitle: "ASUS ROG Azoth 75%",
    link: "https://amzn.to/3Pxibx6",
    alt: "Home Keyboard - ASUS Rog Azoth 75%",
    image: `${keyboardsBasePath}home_keyboard.png`,
  },
  {
    title: "Home Keycaps",
    link: "https://s.click.aliexpress.com/e/_Dn3qOE3",
    subtitle: "EVA-01 Theme",
    alt: "EVA-01 PBT XDA Keycaps",
    image: `${keyboardsBasePath}home_keycaps.png`,
  },
  {
    title: "Spacebar Foam",
    link: "https://amzn.to/3sYP0tS",
    subtitle: "finishing touch",
    alt: "Spacebar Foam",
    image: `${keyboardsBasePath}spacebar_foam.png`,
  },
];

const recordingLinks: LinkListItem[] = [
  {
    title: "Phone",
    subtitle: "Pixel 7 Pro",
    link: "https://amzn.to/44RRJTe",
    alt: "Pixel 7 Pro Phone",
    image: `${recordingBasePath}phone.png`,
  },
  {
    title: "Video Camera",
    subtitle: "DJI Osmo Pocket 3",
    link: "https://amzn.to/3QTJv8n",
    alt: "DJI Osmo Pocket 3 Creator Combo",
    image: `${recordingBasePath}video_cam.png`,
  },
];

const desktopGearLinks: LinkListItem[] = [
  {
    title: "Grovemade Desk Shelf",
    subtitle: "10% OFF code: IMPACC10",
    link: "https://grovemade.com/desk-shelf-system?rfsn=7165896.d6eb21",
    alt: "Grovemade",
    image: "/affiliates/grovemade.png",
  },
  {
    title: "Mouse",
    subtitle: "Logitech G604",
    link: "https://amzn.to/3PPN4gl",
    alt: "Logitech G604 LIGHTSPEED Gaming Mouse",
    image: `${desktopBasePath}mouse.png`,
  },
  {
    title: "Webcam",
    subtitle: "Logitech Brio 4K",
    link: "https://amzn.to/3PQf976",
    alt: "Logitech Brio 4K Webcam",
    image: `${desktopBasePath}webcam.png`,
  },
  {
    title: "Speakers",
    subtitle: "Audioengine HD3",
    link: "https://amzn.to/3RuGZY1",
    alt: "Audioengine HD3 Wireless Speakers with Bluetooth - 60W Powered Computer Speakers",
    image: `${desktopBasePath}speakers.png`,
  },
  {
    title: "Monitor",
    subtitle: 'Samsung 49" G93SC OLED',
    link: "https://amzn.to/3uk71DR",
    alt: 'SAMSUNG 49" Odyssey G93SC Series OLED LS49CG932SNXZA',
    image: `${desktopBasePath}monitor.png`,
  },
  {
    title: "Monitor Light Bar",
    link: "https://amzn.to/49KnNvO",
    alt: "ONWAY Curved Monitor Light Bar with Wireless Remote",
    image: `${desktopBasePath}light_bar.png`,
  },
  {
    title: "Microphone (VO + VC)",
    subtitle: "Shure SM7B",
    link: "https://amzn.to/452AXkm",
    alt: "Shure SM7B Dynamic Microphone",
    image: `${desktopBasePath}microphone.png`,
  },
  {
    title: "Microphone Arm",
    subtitle: "Elgato Wave Mic Arm LP",
    link: "https://amzn.to/44YhAch",
    alt: "Elgato Wave Mic Arm LP",
    image: `${desktopBasePath}mic_arm.png`,
  },
  {
    title: "Chair",
    subtitle: "Steelcase Gesture",
    link: "https://amzn.to/3ENwffM",
    alt: "Steelcase Gesture Office Chair",
    image: `${desktopBasePath}chair.png`,
  },
];

const lightingLinks: LinkListItem[] = [
  {
    title: "Wall Light",
    subtitle: "Govee Glide",
    link: "https://amzn.to/454xlhR",
    alt: "Govee Glide RGBIC LED Wall Lights, Smart RGBIC Wall Sconces for Gaming TV Bedroom Streaming, Work with Alexa and Google Assistant",
    image: `${lightingBasePath}wall_light.png`,
  },
  {
    title: "Floor Lamp",
    subtitle: "Govee Lyra",
    link: "https://amzn.to/45aVrr3",
    alt: "Govee Floor Lamp, RGBIC Lyra Color Changing Corner Lamp, Modern LED Lights with Wi-Fi App Control",
    image: `${lightingBasePath}floor_lamp.png`,
  },
  {
    title: "Rope Light",
    subtitle: "Govee Neon",
    link: "https://amzn.to/461BTXr",
    alt: "Govee Neon RGBIC Rope Lights with Music Sync",
    image: `${lightingBasePath}rope_light.png`,
  },
];

const everydayCarryLinks: LinkListItem[] = [
  {
    title: "Backpack",
    link: "https://amzn.to/3EKLshA",
    subtitle: "Peak Design Everyday V2",
    alt: "Peak Design Everyday Backpack V2 20L",
    image: `${edcBasePath}backpack.png`,
  },
  {
    title: "Noise Cancelling Earbuds",
    subtitle: "Sony WF-1000XM4",
    link: "https://amzn.to/3EKOJh2",
    alt: "Noise Cancelling Earbuds",
    image: `${edcBasePath}earbuds.png`,
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
    title: "Heat Protectant",
    link: "https://amzn.to/3MEXHjU",
  },
  {
    title: "Hair Spray",
    link: "https://amzn.to/48ilD62",
  },
  // {
  //   title: "Dry Shampoo",
  //   link: "https://amzn.to/3PgwBjO",
  // },
];

type GearProps = { style?: CSSProperties | undefined };

const Gear: React.FunctionComponent<GearProps> = (props: GearProps) => {
  return (
    <div style={props.style}>
      <Space style={spaceStyle}>
        This is the stuff I use. I try to keep this updated but if you don't see
        what you're looking for, just ask!
      </Space>
      <LinkList label={KEYBOARDS_LABEL} items={keyboardLinks} />
      <LinkList label="Recording" items={recordingLinks} />
      <LinkList label="Desktop" items={desktopGearLinks} />
      <LinkList label="Lighting" items={lightingLinks} />
      <LinkList label="Everyday Carry" items={everydayCarryLinks} />
      <LinkList label="Skincare" items={skincareLinks} />
      <LinkList label="Hair" items={hairLinks} />
      <Space size={0} direction="vertical" style={spaceStyle}>
        As an Amazon Associate I earn from qualifying purchases. I may earn a
        commission at no cost to you, if you purchase item(s) through the
        product links above.
      </Space>
    </div>
  );
};

export default Gear;
