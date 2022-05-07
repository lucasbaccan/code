import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Vá direto ao ponto',
    Svg: require('@site/static/img/clock.svg').default,
    description: (
      <>
        Pra que ler um monte de conteúdo se você pode ir direto no que precisa.
      </>
    ),
  },
  {
    title: 'Não perca uma ideia',
    Svg: require('@site/static/img/lightbulb.svg').default,
    small: true,
    description: (
      <>
        Ficar pesquisando material é mancada
        Utilize dicas, truques, macetes ...
      </>
    ),
  },
  {
    title: 'Docusaurus: Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href='https://docusaurus.io/'>Docusaurus</a>: Documentação feita de forma simples e rápida.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
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

export default function Home() {
  return (
    <Layout
      description="Dicas, manhas, truques para o dia a dia">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
