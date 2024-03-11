"use client";
import { spaceStyle } from "@/app/page";
import LinkList, { LinkListItem, LinkListProps } from "@/components/LinkList";
import { Space, Typography } from "antd";
import React, { CSSProperties } from "react";

const { Text } = Typography;

const keyboardsLabel = "Keyboards";

const cameraBasePath = "/camera/";
const desktopBasePath = "/desktop/";
const lightingBasePath = "/lighting/";
const edcBasePath = "/edc/";

const keyboardLinks: LinkListItem[] = [
  {
    title: "Lofree Flow",
    subtitle: "10% OFF code: calvinxli",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
    alt: "Lofree Flow",
    image: "/affiliates/lofree.png",
  },
  {
    title: "ASUS ROG Azoth 75%",
    link: "https://amzn.to/3Pxibx6",
    alt: "ASUS ROG Azoth 75% Wireless DIY Custom Gaming Keyboard",
  },
  {
    title: "EVA-01 Anime Keycaps",
    link: "https://s.click.aliexpress.com/e/_Dn3qOE3",
    alt: "Evangelion EVA-01 PBT XDA Anime Keycaps",
  },
  {
    title: "Keydous NJ80-AP",
    subtitle: "retired",
    link: "https://amzn.to/3Pz4PjR",
    alt: "keydous nj80-ap, brass plate, gateron pro brown switches",
  },
  {
    title: "Mint Keycaps",
    subtitle: "retired",
    link: "https://amzn.to/3r8uJ4y",
    alt: "Mint PBT XDA Keycaps",
  },
];

const cameraLinks: LinkListItem[] = [
  {
    title: "Camera 1",
    subtitle: "DJI Osmo Pocket 3",
    link: "https://amzn.to/3QTJv8n",
    alt: "DJI Osmo Pocket 3 Creator Combo",
    image: `${cameraBasePath}dji.png`,
  },
  {
    title: "Camera 2",
    subtitle: "Sony ZV-E10",
    link: "https://amzn.to/433Tbm9",
    alt: "Sony Alpha ZV-E10 - APS-C Interchangeable Lens Mirrorless Vlog Camera",
    image: `${cameraBasePath}sony.png`,
  },
  {
    title: "Camera 3",
    subtitle: "Google Pixel 8 Pro",
    link: "https://amzn.to/3Td8C8V",
  },
  {
    title: "Camera Lens",
    subtitle: "Sigma 16mm f/1.4",
    link: "https://amzn.to/3SZU9LC",
    alt: "Sigma 16mm f/1.4 DC DN Contemporary Lens for Sony E",
  },
  {
    title: "Tripod",
    link: "https://amzn.to/3sXH8Jr",
  },
  {
    title: "Selfie Stick",
    link: "https://amzn.to/3Gf15hZ",
  },
];

const officeFurnitureLinks: LinkListItem[] = [
  {
    title: "Grovemade Desk Shelf",
    subtitle: "10% OFF code: IMPACC10",
    link: "https://grovemade.com/desk-shelf-system?rfsn=7165896.d6eb21",
    alt: "Grovemade",
    image: "/affiliates/grovemade.png",
  },
  {
    title: "Chair",
    subtitle: "Steelcase Gesture",
    link: "https://amzn.to/3ENwffM",
    alt: "Steelcase Gesture Office Chair",
  },
  {
    title: "Shelf",
    subtitle: "6 Cube Storage Shelf",
    link: "https://amzn.to/49IOEZh",
  },
  {
    title: "Desk",
    link: "https://vorii.com/collections/standing-desks-new/products/project-s-hardwood-standing-desk",
  },
];

const desktopLinks: LinkListItem[] = [
  {
    title: "Monitor",
    subtitle: 'Samsung 49" G93SC OLED',
    link: "https://amzn.to/3uk71DR",
    alt: 'SAMSUNG 49" Odyssey G93SC Series OLED LS49CG932SNXZA',
    image: `${desktopBasePath}monitor.png`,
  },
  {
    title: "Mouse",
    subtitle: "Logitech G604",
    link: "https://amzn.to/3PPN4gl",
    alt: "Logitech G604 LIGHTSPEED Gaming Mouse",
    image: `${desktopBasePath}mouse.png`,
  },
  {
    title: "Speakers",
    subtitle: "Audioengine HD3",
    link: "https://amzn.to/3RuGZY1",
    alt: "Audioengine HD3 Wireless Speakers with Bluetooth - 60W Powered Computer Speakers",
    image: `${desktopBasePath}speakers.png`,
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
    title: "Webcam",
    subtitle: "Logitech Brio 4K",
    link: "https://amzn.to/3PQf976",
    alt: "Logitech Brio 4K Webcam",
    image: `${desktopBasePath}webcam.png`,
  },
];

const pcSpecsLinks: LinkListItem[] = [
  {
    title: "GPU",
    subtitle: "RTX 4080 SUPER",
    link: "https://amzn.to/3uhi1lM",
    alt: "MSI Gaming RTX 4080 Super 16G Ventus 3X OC",
  },
  {
    title: "CPU",
    subtitle: "i7-13700K",
    link: "https://amzn.to/47MTeE5",
    alt: "Intel Core i7-13700K 3.4 GHz 16-Core Processor",
  },
  {
    title: "CPU Cooler",
    subtitle: "Deepcool AK620",
    link: "https://amzn.to/47GTKmU",
    alt: "Deepcool AK620 68.99 CFM CPU Cooler",
  },
  {
    title: "RAM",
    subtitle: "32GB DDR5-6000",
    link: "https://amzn.to/40Q4hdi",
    alt: "G.Skill Trident Z5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL36 Memory",
  },
  {
    title: "SSD",
    subtitle: "SAMSUNG 990 PRO",
    link: "https://amzn.to/40QXEaQ",
    alt: "SAMSUNG 990 PRO SSD 4TB PCIe 4.0 M.2 2280 Internal Solid State Hard Drive",
  },
  {
    title: "Motherboard",
    subtitle: "Z690 Phantom Gaming-ITX/TB4",
    link: "https://amzn.to/3QQzNTX",
    alt: "ASRock Z690 Phantom Gaming-ITX/TB4 Mini ITX LGA1700 Motherboard",
  },
  {
    title: "PSU",
    subtitle: "Corsair RM1000e",
    link: "https://amzn.to/3uALiax",
    alt: "Corsair RM1000e (2022) 1000 W 80+ Gold Certified Fully Modular ATX Power Supply",
  },
  {
    title: "Case",
    subtitle: "Torrent Nano",
    link: "https://amzn.to/49Js0Ad",
    alt: "Fractal Design Torrent Nano RGB Mini ITX Tower Case",
  },
];

const lightingLinks: LinkListItem[] = [
  {
    title: "Monitor Light Bar",
    link: "https://amzn.to/49KnNvO",
    alt: "ONWAY Curved Monitor Light Bar with Wireless Remote",
    image: `${lightingBasePath}light_bar.png`,
  },
  {
    title: "Monitor Key Light",
    link: "https://amzn.to/41fJ38Y",
    alt: "Logitech for Creators Litra Glow Premium LED Streaming Light",
  },
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
    title: "Earbuds",
    link: "https://amzn.to/40HQiGA",
  },
];

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

const Gear: React.FunctionComponent<GearProps> = (props: GearProps) => {
  const links: LinkListProps[] = [
    {
      label: keyboardsLabel,
      items: keyboardLinks,
      defaultActiveKey: keyboardsLabel,
    },
    { label: "Camera", items: cameraLinks },
    { label: "Desktop", items: desktopLinks },
    { label: "PC Specs", items: pcSpecsLinks },
    { label: "Lighting", items: lightingLinks },
    { label: "Everyday Carry", items: everydayCarryLinks },
    { label: "Office Furniture", items: officeFurnitureLinks },
    // { label: "Hair", items: hairLinks },
    // { label: "Skincare", items: skincareLinks },
  ];

  return (
    <div style={props.style}>
      <Space direction="vertical" size={2} style={spaceStyle}>
        <Text>
          This is the stuff I use. I try to keep this updated but if you don't
          see what you're looking for, just ask!
        </Text>
        <Text>
          *Some things belong to multiple categories so you may want to check
          all the relevant ones.
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

export default Gear;
