"use client";
import Bio from "@/components/Bio";
import LinkList, { LinkListItem } from "@/components/LinkList";
import { Row, Typography } from "antd";
import React, { CSSProperties } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const { Title } = Typography;

type HomeProps = { style?: CSSProperties | undefined };

const affiliateBasePath = "/affiliates/";

const affiliatesLabel = "Affiliates";

const affilateLinks: LinkListItem[] = [
  {
    title: "Tech bootcamp with JOB GUARANTEE!",
    subtitle: "$1000 OFF code: CALVINLI",
    link: "https://www.springboard.com/courses/software-engineering-career-track/?utm_source=calvinli&utm_medium=influencer&utm_campaign=sec&utm_term=paid&utm_content=first_youtube_vid_2132023",
    alt: "Springboard",
    image: `${affiliateBasePath}springboard.png`,
  },
  // {
  //   title: "YesStyle",
  //   subtitle: "Code: CALVIN10",
  //   link: "https://www.yesstyle.com/en/home.html?rco=CALVIN10&utm_term=CALVIN10&utm_medium=Influencer&utm_source=dynamic&mcg=influencer",
  // },
  // {
  //   title: "Gruns Nutrition",
  //   subtitle: "20% OFF w/ this link",
  //   link: "https://www.gruns.co/pages/vip?snowball=CALVIN05232",
  //   image: `${affiliateBasePath}gruns.png`,
  // },
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
          label={affiliatesLabel}
          items={affilateLinks}
          defaultActiveKey={affiliatesLabel}
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
          <LiteYouTubeEmbed id="0xjTMh78tmI" title="Latest Vlog" />
        </Row>
      </div>
    );
  }
}

export default Home;
