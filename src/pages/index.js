import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Socials } from '../components';
import styles from './index.module.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
    <div className="container">
      <h1 className="hero__title">{siteConfig.title}</h1>
      <Box sx={{ display: 'flex' }}>
        <Box m="auto">
          <Avatar
            alt="Jaydeep Rathod"
            src={useBaseUrl('/img/pp.png')}
            sx={{ width: 150, height: 150, m: 2 }}
          />
        </Box>
      </Box>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      <Socials />
    </div>
  </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
