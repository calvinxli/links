"use client";
import React, { CSSProperties } from "react";
import { Image, Typography, Row, Tooltip } from "antd";
import { MdLocationPin } from "react-icons/md";
import LinkList, { LinkListItem } from "@/components/LinkList";
import Bio from "@/components/Bio";

const { Title } = Typography;

type HomeProps = { style?: CSSProperties | undefined };

const affilateLinks: LinkListItem[] = [
  {
    title: "Tech bootcamp with JOB GUARANTEE!",
    subtitle: "$1000 OFF with code: CALVINLI",
    link: "https://www.springboard.com/courses/software-engineering-career-track/?utm_source=calvinli&utm_medium=influencer&utm_campaign=sec&utm_term=paid&utm_content=first_youtube_vid_2132023",
    alt: "Springboard",
    image: "/springboard.png",
  },
  {
    title: "Lofree | Aesthetic Keyboards and Accessories",
    subtitle: "10% OFF CODE: calvinxli",
    link: "https://www.lofree.co/products/lofree-flow-the-smoothest-mechanical-keyboard?variant=44226590736603&aff=211",
    alt: "Lofree",
    image: "/lofree.png",
  },
  {
    title: "Gruns Nutrition",
    subtitle: "20% OFF yummy gummies with this link",
    link: "https://www.gruns.co/pages/vip?snowball=CALVIN05232",
    image: "/gruns.png",
  },
  {
    title: "Grovemade Desk Shelf",
    subtitle: "10% OFF code: IMPACC10",
    link: "https://grovemade.com/desk-shelf-system?rfsn=7165896.d6eb21",
    alt: "Grovemade",
    image: "/grovemade.png",
  },
  {
    title: "Graphene-X",
    subtitle: "10% OFF code: IMPACC",
    link: "https://www.graphene-x.com/products/jogger-x-pants?rfsn=7014375.01f8a11",
    alt: "Graphene-X",
    image: "/graphene-x.png",
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
