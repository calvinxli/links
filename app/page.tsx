'use client'
import React from 'react';
import { Image, Typography, ConfigProvider, theme, Row } from 'antd';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { BsDiscord, BsTwitch } from 'react-icons/bs'

const primaryColor = 'white';
const defaultSocialSize = '40px'
const { Text, Title, Link } = Typography;
const socials = [
  {
    'icon': <AiOutlineInstagram />,
    'link': 'https://www.instagram.com/calvinxli',
    'color': primaryColor,
    'size': defaultSocialSize
  },
  {
    'icon': <BsTwitch />,
    'link': 'https://www.twitch.tv/calvinxli',
    'color': primaryColor,
    'size': defaultSocialSize
  },
  {
    'icon': <AiFillYoutube />,
    'link': 'https://www.youtube.com/@calvinxli',
    'color': '#FF0000',
    'size': '80px'
  },
  {
    'icon': <BsDiscord />,
    'link': 'https://discord.gg/RD5wRyDEHE',
    'color': primaryColor,
    'size': defaultSocialSize
  },
  {
    'icon': <AiOutlineMail />,
    'link': 'mailto:impaccengineer@gmail.com',
    'color': primaryColor,
    'size': defaultSocialSize,
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
      <Title style={{ margin: 12 }}>
        Calvin Li
      </Title>
    </Row>
    <Row justify='center' align='middle'>
      <Title level={4} style={{ margin: 0 }}><MdLocationPin />Seattle, WA</Title>
    </Row>
    <Row justify='center' align='middle'>
      <Title level={5} style={{ margin: 0 }}>Tech | Foodie | Lifestyle</Title>
    </Row>
    <Row justify='center' align='middle'>
      {socials.map((social, _index) => <Link key={_index} style={{ "fontSize": social.size, "color": social.color }} href={social.link}>{social.icon}</Link>)}
    </Row>
  </ConfigProvider>
);

export default HomePage;
