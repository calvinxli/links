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
        <LinkList
          commisionsEarned={true}
          header="Affiliates"
          items={[
            {
              title: "Tech bootcamp with JOB GUARANTEE!",
              subtitle: "$1000 OFF with code: CALVINLI",
              link: "https://www.springboard.com/courses/software-engineering-career-track/?utm_source=calvinli&utm_medium=influencer&utm_campaign=sec&utm_term=paid&utm_content=first_youtube_vid_2132023",
              alt: "Springboard",
            },
            {
              title: "Lofree | Aesthetic Keyboards and Accessories",
              subtitle: "10% OFF CODE: calvinxli",
              link: "https://www.lofree.co/?aff=211",
              alt: "Lofree",
            },
            {
              title: "Gruns Nutrition",
              subtitle: "20% OFF yummy gummies with this link",
              link: "https://www.gruns.co/pages/vip?snowball=CALVIN05232",
            },
            {
              title: "Grovemade Desk Shelf",
              subtitle: "10% OFF code: IMPACC10",
              link: "https://grovemade.com/desk-shelf-system?rfsn=7165896.d6eb21",
              alt: "Grovemade",
            },
            {
              title: "Graphene-X (Polo/Jogger)",
              subtitle: "10% OFF code: IMPACC",
              link: "https://bit.ly/3GxbGpy",
              alt: "Graphene-X",
            },
          ]}
        />
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
