import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import 'swiper/css';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import Layout from './layout';
import { ConfigProvider } from 'antd';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'black',
          },
          components: {
            Select: {
              optionSelectedColor: '#ffffff'
            },
            Input: {
              activeBorderColor: 'transparent',
            }
          }
        }}
      >
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ConfigProvider>
    </FaustProvider>
  );
}
