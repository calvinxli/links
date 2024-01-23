"use client";
import React, { CSSProperties } from "react";
import { Typography, Row } from "antd";
import LinkList, { LinkListItem } from "@/components/LinkList";
import Bio from "@/components/Bio";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const { Title } = Typography;

type HomeProps = { style?: CSSProperties | undefined };

const basePath = "/affiliates/";

const affilateLinks: LinkListItem[] = [
  {
    title: "Tech bootcamp with JOB GUARANTEE!",
    subtitle: "$1000 OFF code: CALVINLI",
    link: "https://www.springboard.com/courses/software-engineering-career-track/?utm_source=calvinli&utm_medium=influencer&utm_campaign=sec&utm_term=paid&utm_content=first_youtube_vid_2132023",
    alt: "Springboard",
    image: `${basePath}springboard.png`,
  },
  {
    title: "YesStyle",
    subtitle: "Code: CALVIN10",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
    alt: "Lofree",
    image: `${basePath}lofree.png`,
  },
  {
    title: "Gruns Nutrition",
    subtitle: "20% OFF w/ this link",
    link: "https://www.gruns.co/pages/vip?snowball=CALVIN05232",
    image: `${basePath}gruns.png`,
  },
];

class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <Bio />
        <LinkList
          commisionsEarned={true}
          label="Affiliates"
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
        </Row>{" "}
        <Row justify="center" align="middle" style={{ marginBottom: 16 }}>
          <LiteYouTubeEmbed id="XbCYyGzHDIA" title="Latest Vlog" />
        </Row>
        <Row justify="center" align="middle">
          <Typography.Text style={{ textAlign: "center" }}>
            This website is built and maintained by me! <br /> Please let me
            know if you discover a bug.
          </Typography.Text>
        </Row>
      </div>
    );
  }
}

export default Home;
