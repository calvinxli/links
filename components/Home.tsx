"use client";
import React, { CSSProperties } from "react";
import { Image, Typography, Row, Tooltip } from "antd";
import { MdLocationPin } from "react-icons/md";
import LinkList, { LinkListItem } from "@/components/LinkList";
import SocialRow from "@/components/SocialRow";

const { Title } = Typography;

type HomeProps = { style?: CSSProperties | undefined };

const affilateLinks: LinkListItem[] = [
  {
    title: "Tech bootcamp with JOB GUARANTEE!",
    subtitle: "$1000 OFF with code: CALVINLI",
    link: "https://www.springboard.com/courses/software-engineering-career-track/?utm_source=calvinli&utm_medium=influencer&utm_campaign=sec&utm_term=paid&utm_content=first_youtube_vid_2132023",
    alt: "Springboard",
  },
  {
    title: "Lofree | Aesthetic Keyboards and Accessories",
    subtitle: "10% OFF CODE: calvinxli",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
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
];

class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <Row justify="center" align="middle">
          <Title level={3} style={{ textAlign: "center", margin: "10px" }}>
            Work in progress side project. Official site at{" "}
            <a href="https://calvinxli.com">https://calvinxli.com</a>
          </Title>
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
          items={affilateLinks}
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
      </div>
    );
  }
}

export default Home;
