import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/utgame">
            下载游戏
          </Link>
        </div>
      </div>
    </header>
  );
}

var script = document.createElement('script');
script.defer = true;
script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
script.setAttribute('data-cf-beacon', '{"token": "24814f2f5ca0472f8748dcb86b186ae6"}');
document.head.appendChild(script);

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="Keep your Determination.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
