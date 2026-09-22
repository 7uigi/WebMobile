# WebMobile - Projeto
# Integrantes 

Gabriel Freitas 10435826
Gustavo Luigi Chao Pinotti 10419700
Henrique Akio Uehara 10771465

# Processo de Ideação
foi feito um brainstorm para encontrarmos nossa idéia
![Brainstorm](https://github.com/7uigi/WebMobile/blob/main/Fotos%20web/WhatsApp%20Image%202026-08-25%20at%2020.34.24.jpeg)

# Protótipo Web
wireframe da tela inicial web
![Protótipo Web](https://github.com/7uigi/WebMobile/blob/main/Fotos%20web/WhatsApp%20Image%202026-08-25%20at%2020.34.00.jpeg)

# Protótipo Mobile
wireframe da tela inicial mobile
![Protótipo](https://github.com/7uigi/WebMobile/blob/main/Fotos%20web/WhatsApp%20Image%202026-08-25%20at%2020.34.17.jpeg)

# Tutorial HTML
O site esta separado em 4 partes sendo elas:

## Header
O header do site engloba o logo e a funcionalidade de alterar o tamanho da fonte do site visando uma maior acessibilidade para o publico alvo

 `
        <header>
            <div class="brand">
                <img src="./assets/logo.jpeg"alt="Logo">
                <h1> Conecta <strong>60+</strong> </h1>
            </div>
            <div class="accessibility">
                <p class="accessibility-label"> Tamanho do texto</p>
                <button onclick="aumentarFonte()">+</button>
                <button onclick="diminuirFonte()">-</button>
            </div>
        </header>
  `;

  
## Section 1
O Section 1 é referente a introdução do site e uma foto

 `
        <section class="hero">
            <div class="hero-copy">
                <h2>Mais autonomia para o dia a dia.</h2>
                <p class="texto">
                    Informações simples e acessíveis para ajudar pessoas com 60 anos ou mais
                    a encontrarem serviços importantes com mais segurança e praticidade.
                </p>
            </div>
            <div class="hero-image">
                <img src="./assets/intro.jpeg" alt="Pessoa idosa utilizando tecnologia">
            </div>
        </section>
 `;
 
## Section 2
O Section 2 é referente a 6 ajudas diferentes para o publico alvo usufruir do ambiente digital

 `
    <section class="cards">
            <a class="service-card" href="#">
                <div class="icon"><img src="./assets/policial.jpeg" alt=""></div>
                <div><h3 class="texto">Segurança</h3><p>Orientações e contatos importantes.</p></div>
                <p class="arrow">→</p>
            </a>
    </section>
 `;
 
## Footer
Já o Footer são contatos de ajuda para situações de emergência (Polícia, Ambulância e Bombeiros)

 `
       <footer>
            <section class="emergency">
                <div class="emergency-cards">
                    <a href="#" class="emergency-card">
                        <img src="./assets/policial.jpeg" alt="">
                        <div><p>Polícia</p><p>190</p></div>
                        <b>→</b>
                    </a>
                </div>
        </footer>
  `;



# Tutorial CSS
O site esta separado em 4 partes sendo elas:

## Header
O header do site engloba o logo e a funcionalidade de alterar o tamanho da fonte do site visando uma maior acessibilidade para o publico alvo

 `
    .topbar {
        min-height: 88px;
        padding: 14px clamp(20px, 5vw, 76px);
        background: var(--surface);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        position: sticky;
        top: 0;
        z-index: 10;
    }
  
  `;

  
## Section 1
O Section 1 é referente a introdução do site e uma foto

 `
    .hero {
        max-width: 1240px;
        margin: 0 auto;
        padding: 64px 28px 76px;
        display: grid;
        grid-template-columns: 1fr .9fr;
        gap: 70px;
        align-items: center;
    }
 `;
 
## Section 2
O Section 2 é referente a 6 ajudas diferentes para o publico alvo usufruir do ambiente digital

 `
    .cards {
        max-width: 1240px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
    }
 `;
 
## Footer
Já o Footer são contatos de ajuda para situações de emergência (Polícia, Ambulância e Bombeiros)

 `
    footer{
    background: #123e4d;
    color: #fff;
    padding: 30px max(28px, 5vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    }
`;

## site com interface do CSS

![site com CSS](https://github.com/7uigi/WebMobile/blob/main/Fotos%20web/siteCSS.png)

# Tutorial Js
A funcionalidade do java script adicionada foi a funcionalidade de fontes alteraveis para tornar responsivel o tamanho dos textos para uma maior visibilidade e acessibilidade.

## Funcionalidade tamanho das fontes
uma função para aumentar o tamanho da fonte e outra para diminuir.

  `
  
    let tamanhoFonte = 32;

    const botaoAumentar = document.getElementById("aumentar");
    const botaoDiminuir = document.getElementById("diminuir");
    const textos = document.querySelectorAll(".texto");

    function aumentarFonte() {
        if (tamanhoFonte < 60) {
            tamanhoFonte += 2;

            const textos = document.querySelectorAll(".texto");

            textos.forEach(function(texto) {
                texto.style.fontSize = tamanhoFonte + "px";
            });
        }
    }

    function diminuirFonte() {
        if (tamanhoFonte > 20) {
            tamanhoFonte -= 2;

            const textos = document.querySelectorAll(".texto");

            textos.forEach(function(texto) {
                texto.style.fontSize = tamanhoFonte + "px";
            });
        }
    }

  `;

## Site com Funcionalidade do JS
![site com js](https://github.com/7uigi/WebMobile/blob/main/Fotos%20web/siteJS.png)