import { Row } from "antd";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { BiLogoTwitch } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { SocialLinkButton } from "./Social";

export default function SocialRow() {
  return (
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
  );
}
