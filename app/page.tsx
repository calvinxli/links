'use client'
import React from 'react';
import { Button, Space, Image, Typography, ConfigProvider, theme } from 'antd';
import { AiFillYoutube, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/Md'
import { BsDiscord, BsTwitch } from 'react-icons/bs'

const primaryColor = 'black';
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
    'size': '60px'
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
  <Space direction='vertical'>
    <Space>
      <Image width={200} src='/profile_pic_small.jpg' alt="Calvin's profile picture" preview={false} />
    </Space>
    <Space direction='vertical'>
      <Title>
        Calvin Li
      </Title>
      <Title level={4}><MdLocationPin />Seattle, WA</Title>
      <Title level={5}>Tech | Foodie | Lifestyle</Title>
      <Space>
        {socials.map(social => <a style={{ "fontSize": social.size, "color": social.color }} type='button' href={social.link}>{social.icon}</a>)}
      </Space>
    </Space>
  </Space>
);

export default HomePage;