import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <center>Vá direto ao ponto</center>,
    imageUrl: 'img/clockSmall.svg',
    description: (
      <center>
        Pra que ler um monte de conteúdo se você pode ir direto no que precisa.
      </center>
    ),
  },
  {
    title: <center>Não perca uma ideia</center>,
    imageUrl: 'img/lightbulbSmall.svg',
    description: (
      <center>
        Ficar pesquisando material é mancada<br />
        Utilize dicas, truques, macetes ...
      </center>
    ),
  },
  {
    title: <center>Docusaurus: Powered by React</center>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <center>
        Documentação feita de forma simples e rápida.
      </center>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  return (
    <Layout
      description="Dicas, truques, manhas &macetes">
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
              {/* <br />
              Foque no que é{' '}
              <br />
              <span className={styles.heroProjectKeywords}>importante!</span> */}
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
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
