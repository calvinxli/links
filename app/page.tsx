"use client";
import React from "react";
import { Image, Typography, ConfigProvider, theme, Row, Tooltip } from "antd";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { BiLogoTwitch } from "react-icons/bi";
import { SocialLinkButton } from "@/components/Social";

const { Text, Title } = Typography;

const HomePage = () => (
  <ConfigProvider
    theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Row justify="center" align="middle">
      <Image
        width={150}
        src="/profile_pic.jpg"
        alt="Calvin's profile picture"
        preview={false}
        style={{ borderRadius: "50%", border: "2px solid white" }}
      />
    </Row>
    <Row justify="center" align="middle">
      <Tooltip title="Calvin Li">
        <Title
          aria-label="Calvin Li"
          level={3}
          style={{ margin: 10, color: "white" }}
        >
          @calvinxli
        </Title>
      </Tooltip>
    </Row>
    <Row justify="center" align="middle">
      <Title level={5} style={{ margin: 0 }}>
        <MdLocationPin />
        Seattle, WA
      </Title>
    </Row>
    <Row justify="center" align="middle">
      <Title level={5} style={{ margin: 0 }}>
        Tech | Foodie | Lifestyle
      </Title>
    </Row>
    <Row justify="center" align="middle">
      <SocialLinkButton
        icon={<BiLogoTwitch />}
        link="https://www.twitch.tv/calvinxli"
        ariaLabel="twitch.tv"
      />
      <SocialLinkButton
        icon={<AiOutlineInstagram />}
        link="https://www.instagram.com/calvinxli"
        ariaLabel="instagram.com"
      />
      <SocialLinkButton
        icon={<AiFillYoutube />}
        link="https://www.youtube.com/@calvinxli"
        ariaLabel="youtube.com"
        color="#FF0000"
        size="50px"
      />
      <SocialLinkButton
        icon={<BsDiscord />}
        link="https://discord.gg/RD5wRyDEHE"
        ariaLabel="discord.gg"
      />
      <SocialLinkButton
        icon={<AiOutlineMail />}
        link="mailto:impaccengineer@gmail.com"
        ariaLabel="email"
      />
    </Row>
    <Row justify="center" align="middle">
      <Title
        aria-label="Calvin Li"
        level={3}
        style={{ margin: 10, color: "white" }}
      >
        Latest Vlog
      </Title>
    </Row>
    <Row justify="center" align="middle">
      <iframe
        id="ytplayer"
        itemType="text/html"
        style={{
          borderRadius: "5%",
          aspectRatio: "16/9",
          width: "100%",
          border: 0,
        }}
        src="https://www.youtube.com/embed/hwsGB-XObvA"
        allowFullScreen
      ></iframe>
    </Row>
  </ConfigProvider>
);

export default HomePage;
