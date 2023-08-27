import React from 'react';
import { Button, Space } from 'antd';
import Image from 'next/image';

const HomePage = () => (
  <Space>
    <Image
      src="/links/next.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
    <Button type="primary">WIP</Button>
  </Space>
);

export default HomePage;