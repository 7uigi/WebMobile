
"use client";

import Link from "next/link";

export default function Header({ aumentarFonte, diminuirFonte }) {
  return (
    <header className="topbar">

      {/* Logo e nome */}
      <div className="brand">
        <img src="/assets/logo.jpeg" alt="Logo" />
        <h1>
          Conecta <strong>60+</strong>
        </h1>
      </div>

      {/* Botão Home centralizado */}
      <div className="home-container">
        <Link href="/" className="home-button" aria-label="Página inicial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9" />
            <path d="M9 21v-8h6v8" />
          </svg>
        </Link>
      </div>

      {/* Acessibilidade */}
      <div className="accessibility">
        <p className="accessibility-label">
          Tamanho do texto
        </p>

        <button
          onClick={aumentarFonte}
          aria-label="Aumentar fonte"
        >
          +
        </button>

        <button
          onClick={diminuirFonte}
          aria-label="Diminuir fonte"
        >
          -
        </button>
      </div>

    </header>
  );
}
