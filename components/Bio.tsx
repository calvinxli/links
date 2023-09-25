import { Row, Tooltip, Typography, Image } from "antd";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { BiLogoTwitch } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { SocialLinkButton } from "./Social";
import { MdLocationPin } from "react-icons/md";

const { Text, Title } = Typography;

export default function Bio() {
  return (
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
            style={{ marginTop: 4, marginBottom: 6, color: "white" }}
          >
            @calvinxli
          </Title>
        </Tooltip>
      </Row>
      <Row justify="center" align="middle">
        <Title level={5} style={{ margin: 0 }}>
          Software Engineer
        </Title>
      </Row>
      <Row justify="center" align="middle">
        <Title level={5} style={{ margin: 0 }}>
          Tech | Foodie | Lifestyle
        </Title>
      </Row>
      <Row justify="center" align="middle">
        <Text style={{ fontWeight: "bold", margin: 0 }}>
          <MdLocationPin />
          Seattle, WA
        </Text>
      </Row>
      <Row justify="space-evenly" align="middle">
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
    </>
  );
}
