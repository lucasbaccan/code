import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/programmer.svg')}
            />
            Dicas{' '}
            <span className={styles.heroProjectKeywords}>truques</span>{' '}
            <br />
            manhas
            <span className={styles.heroProjectKeywords}> &macetes</span>
          </h1>
          <br />
          <h3 className={styles.heroProjectTagline}>
            Programação{' '}
            <span className={styles.heroProjectKeywords}>tecnologia</span>{' '}
            software
            <span className={styles.heroProjectKeywords}> &hardware</span>
          </h3>
        </div>
        <br />
        <br />
        <div className={styles.indexCtas}>
          <Link
            className={styles.indexCtasGetStartedButton}
            to={useBaseUrl('docs/')}>
            Bora lá
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title=""
      description="Dicas, manhas, truques para o dia a dia">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}