import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
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

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
