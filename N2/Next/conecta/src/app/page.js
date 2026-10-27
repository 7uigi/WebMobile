"use client";

import { useState } from "react";

export default function Home() {
  const [tamanhoFonte, setTamanhoFonte] = useState(32);

  const aumentarFonte = () => {
    if (tamanhoFonte < 60) {
      setTamanhoFonte((prev) => prev + 2);
    }
  };

  const diminuirFonte = () => {
    if (tamanhoFonte > 20) {
      setTamanhoFonte((prev) => prev - 2);
    }
  };

  // Estilo dinâmico aplicado aos elementos com a classe .texto
  const estiloTexto = {
    fontSize: `${tamanhoFonte}px`,
  };

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <img src="./assets/logo.jpeg" alt="Logo" />
          <h1> Conecta <strong>60+</strong> </h1>
        </div>
        <div className="accessibility">
          <p className="accessibility-label">Tamanho do texto</p>
          <button onClick={aumentarFonte}>+</button>
          <button onClick={diminuirFonte}>-</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h2>Mais autonomia para o dia a dia.</h2>
          <p className="texto" style={estiloTexto}>
            Informações simples e acessíveis para ajudar pessoas com 60 anos ou mais
            a encontrarem serviços importantes com mais segurança e praticidade.
          </p>
        </div>
        <div className="hero-image">
          <img src="./assets/intro.jpeg" alt="Pessoa idosa utilizando tecnologia" />
        </div>
      </section>

      <section className="cards">
        <a className="service-card" href="#">
          <div className="icon"><img src="./assets/policial.jpeg" alt="" /></div>
          <div>
            <h3 className="texto" style={estiloTexto}>Segurança</h3>
            <p>Orientações e contatos importantes.</p>
          </div>
          <p className="arrow">→</p>
        </a>

        <a className="service-card" href="#">
          <div className="icon"><img src="./assets/uber.jpeg" alt="" /></div>
          <div>
            <h3 className="texto" style={estiloTexto}>Transporte</h3>
            <p>Ajuda para se locomover com tranquilidade.</p>
          </div>
          <p className="arrow">→</p>
        </a>

        <a className="service-card" href="#">
          <div className="icon"><img src="./assets/hospital.jpeg" alt="" /></div>
          <div>
            <h3 className="texto" style={estiloTexto}>Saúde</h3>
            <p>Serviços de saúde e informações úteis.</p>
          </div>
          <p className="arrow">→</p>
        </a>

        <a className="service-card" href="#">
          <div className="icon"><img src="./assets/bombeiros.jpeg" alt="" /></div>
          <div>
            <h3 className="texto" style={estiloTexto}>Emergência</h3>
            <p>Encontre rapidamente quem pode ajudar.</p>
          </div>
          <p className="arrow">→</p>
        </a>

        <a className="service-card" href="#">
          <div className="icon"><img src="./assets/alimento.jpeg" alt="" /></div>
          <div>
            <h3 className="texto" style={estiloTexto}>Alimentação</h3>
            <p>Informações sobre alimentação e apoio.</p>
          </div>
          <p className="arrow">→</p>
        </a>

        <a className="service-card" href="#">
          <div className="icon"><img src="./assets/estudo.jpeg" alt="" /></div>
          <div>
            <h3 className="texto" style={estiloTexto}>Aprendizado</h3>
            <p>Conteúdos para aprender no seu ritmo.</p>
          </div>
          <p className="arrow">→</p>
        </a>
      </section>

      <footer>
        <section className="emergency">
          <div className="emergency-title">
            <p className="alert-icon">!</p>
            <div>
              <p className="eyebrow">EM CASO DE EMERGÊNCIA</p>
              <h2>Contatos importantes</h2>
            </div>
          </div>
          <div className="emergency-cards">
            <a href="#" className="emergency-card">
              <img src="./assets/policial.jpeg" alt="" />
              <div><p>Polícia</p><p>190</p></div>
              <b>→</b>
            </a>
            <a href="#" className="emergency-card">
              <img src="./assets/hospital.jpeg" alt="" />
              <div><p>SAMU</p><p>192</p></div>
              <b>→</b>
            </a>
            <a href="#" className="emergency-card">
              <img src="./assets/bombeiros.jpeg" alt="" />
              <div><p>Bombeiros</p><p>193</p></div>
              <b>→</b>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}