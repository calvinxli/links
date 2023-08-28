'use client'
import React from 'react';
import { Button, Space, Image, Typography } from 'antd';
const { Text, Link } = Typography;

const HomePage = () => (
  <>
    <Space>
      <Image width={200} src='/profile_pic_small.jpg' alt="Calvin's profile picture" preview={false} />
    </Space>
    <Space>
      <Text color='#b9000c'>
        Calvin Li
      </Text>
    </Space>
  </>
);

export default HomePage;