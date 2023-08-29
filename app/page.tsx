'use client'
import React from 'react';
import { Image, Typography, ConfigProvider, theme, Row, Tooltip } from 'antd';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { BsDiscord } from 'react-icons/bs'
import { BiLogoTwitch } from 'react-icons/bi'

const primaryColor = 'white';
const defaultSocialSize = '28px'
const { Text, Title, Link } = Typography;
const socials = [
  {
    'icon': <BiLogoTwitch />,
    'link': 'https://www.twitch.tv/calvinxli',
    'color': primaryColor,
    'size': defaultSocialSize,
    'ariaLabel': 'twitch.tv'
  },
  {
    'icon': <AiOutlineInstagram />,
    'link': 'https://www.instagram.com/calvinxli',
    'color': primaryColor,
    'size': defaultSocialSize,
    'ariaLabel': 'instagram.com'
  },
  {
    'icon': <AiFillYoutube />,
    'link': 'https://www.youtube.com/@calvinxli',
    'color': '#FF0000',
    'size': '50px',
    'ariaLabel': 'youtube.com'
  },
  {
    'icon': <BsDiscord />,
    'link': 'https://discord.gg/RD5wRyDEHE',
    'color': primaryColor,
    'size': defaultSocialSize,
    'ariaLabel': 'discord.gg'
  },
  {
    'icon': <AiOutlineMail />,
    'link': 'mailto:impaccengineer@gmail.com',
    'color': primaryColor,
    'size': defaultSocialSize,
    'ariaLabel': 'email'
  }
]

const HomePage = () => (
  <ConfigProvider
    theme={{
      // 1. Use dark algorithm
      algorithm: theme.darkAlgorithm,

      // 2. Combine dark algorithm and compact algorithm
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <Row justify='center' align='middle'>
      <Image width={150} src='/profile_pic.jpg' alt="Calvin's profile picture" preview={false} style={{ borderRadius: '50%', border: '2px solid white' }} />
    </Row>
    <Row justify='center' align='middle'>
      <Tooltip title='Calvin Li'>
        <Title aria-label='Calvin Li' level={3} style={{ margin: 10, color: 'white' }}>
          @calvinxli
        </Title>
      </Tooltip>
    </Row>
    <Row justify='center' align='middle'>
      <Title level={5} style={{ margin: 0 }}><MdLocationPin />Seattle, WA</Title>
    </Row>
    <Row justify='center' align='middle'>
      <Title level={5} style={{ margin: 0 }}>Tech | Foodie | Lifestyle</Title>
    </Row>
    <Row justify='center' align='middle'>
      {socials.map((social, _index) => <Link key={_index} aria-label={social.ariaLabel} style={{ padding: "8px", fontSize: social.size, "color": social.color }} href={social.link}>{social.icon}</Link>)}
    </Row>
    <Row justify='center' align='middle'>
      <Title aria-label='Calvin Li' level={3} style={{ margin: 10, color: 'white' }}>
        Latest Vlog
      </Title>
    </Row>
    <Row justify='center' align='middle'>
      <iframe id="ytplayer" itemType='text/html' max-width="640px" style={{ borderRadius: '5%' }}
        src="https://www.youtube.com/embed/hwsGB-XObvA" frameBorder={0} allowFullScreen></iframe>
    </Row>
  </ConfigProvider>
);

export default HomePage;
