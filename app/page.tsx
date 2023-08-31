"use client";
import React from "react";
import { Image, Typography, Row, Tooltip } from "antd";
import { MdLocationPin } from "react-icons/md";
import { PageLayout } from "@/components/PageLayout";
import LinkList from "@/components/LinkList";
import SocialRow from "@/components/SocialRow";

const { Title } = Typography;

const HomePage = () => (
  <PageLayout
    content={
      <>
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
        <SocialRow />
        {/* <LinkList
          header="Affiliates"
          items={[
            {
              title: "Hello",
              subtitle: "world",
              link: "https://www.google.com/",
            },
          ]}
        /> */}
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
      </>
    }
  />
);

export default HomePage;
