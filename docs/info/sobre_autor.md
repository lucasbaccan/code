---
id: sobre_autor
title: Sobre o autor
---
<!-- Componente para mostrar a idade atual -->
export const CurrentAge = () => {
    const birthDate = new Date(1995, 9, 30);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
};

Prazer, eu sou Lucas Elias Baccan, tenho <CurrentAge /> anos, e sou um entusiasta de tecnologia, principalmente em desenvolvimento de software e automação. Criei esse site para compartilhar um pouco do meu conhecimento e experiências, além de utilizar para documentar meus estudos e projetos.

Para saber mais sobre mim, basta ver meu perfil no **[GitHub](https://github.com/lucasbaccan/)** ou **[LinkedIn](https://www.linkedin.com/in/lucas-baccan/)**.

<div class="container">
  <div class="row">
    <div class="col col--6">
      <div class="avatar avatar--vertical">
        <img
          class="avatar__photo avatar__photo--xl"
          src="https://avatars1.githubusercontent.com/u/2676484?s=460&amp;v=4"
        />
      </div>
    </div>
  </div>
</div>
