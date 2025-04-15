import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: "";
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  height?: string;
  width?: string;
};

const FeatureItemList: FeatureItem[] = [
  {
    title: "Sobre o autor",
    Svg: require("@site/static/img/programmer.svg").default,
    description: (
      <>
        Olá, me chamo <strong>Lucas Elias Baccan</strong>, e estou feliz de ter
        você aqui, caso queira saber mais sobre mim, basta acessar a área{" "}
        <Link to="/info/sobre_autor">sobre o autor</Link>.
      </>
    ),
  },
  {
    title: "Sobre o site",
    Svg: require("@site/static/img/selection.svg").default,
    description: (
      <>
        Eu salvava diversas coisas nos favoritos do navegador, e queria
        compartilhar isso com mais pessoas, então decidi criar este site. Leia
        mais em <Link to="/info/">sobre o site</Link>.
      </>
    ),
  },
  {
    title: "Vá direto ao ponto",
    Svg: require("@site/static/img/clock.svg").default,
    description: (
      <>
        Pra que ler um monte de conteúdo se você pode ir direto no que precisa.
      </>
    ),
  },
  {
    title: "Não perca uma ideia",
    Svg: require("@site/static/img/lightbulb.svg").default,
    description: (
      <>
        Ficar pesquisando material é mancada Utilize dicas, truques, macetes ...
      </>
    ),
  },
  {
    title: "Docusaurus: Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react_no_bg.svg").default,
    description: (
      <>
        <Link to="https://docusaurus.io/">Docusaurus</Link>: Documentação feita
        de forma simples e rápida. É assim que esse site foi feito.
      </>
    ),
  },
];

function Feature({
  title,
  Svg,
  description,
  height = "200px",
  width = "300px",
}: FeatureItem) {
  return (
    <div>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
          height={height}
          width={width}
        />
      </div>
      <div
        className="text--center padding-horiz--lg"
        style={{ maxWidth: 500, margin: "0 auto" }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureList() {
  // Se o resto da divisão for 1, significa que o último item não tem par, então
  // o número de colunas deve ser 2, caso contrário, deve ser 3
  const rowSize = FeatureItemList.length % 3 === 1 ? 2 : 3;

  const rows = FeatureItemList.reduce((acc, feature, idx) => {
    const rowIndex = Math.floor(idx / rowSize);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(feature);
    return acc;
  }, [] as FeatureItem[][]);

  return (
    <div className="container text--center">
      {rows.map((row, rowIndex) => (
        <div
          className="row text--center margin-top--lg margin-bottom--lg"
          key={rowIndex}
        >
          {row.map((feature, idx) => (
            <div
              key={idx}
              className={clsx(
                "col col--4",
                row.length < 3 && idx === 0 && "col--offset-2"
              )}
            >
              <Feature {...feature} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="text--center">
            <h1>Seja muito bem vindo ao meu site 🥳</h1>
          </div>
          <FeatureList />
        </div>
      </section>
    </div>
  );
}
