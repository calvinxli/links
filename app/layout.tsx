import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import '@/app/globals.css';
import { ConfigProvider, theme } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calvin Li\'s Personal Links Website',
  description: 'Contains links for Calvin\'s social media, affiliates and more',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,

        // token: {
        //   // Seed Token
        //   colorPrimary: '#00b96b',
        //   borderRadius: 2,

        //   colorTextSecondary: "#00b96b",

        //   // Alias Token
        //   colorBgContainer: '#f6ffed',
        // },
      }}
    >
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </ConfigProvider>
  </html>
);

export default RootLayout;