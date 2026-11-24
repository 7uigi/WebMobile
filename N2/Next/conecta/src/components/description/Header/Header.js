
"use client";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ aumentarFonte, diminuirFonte, estiloTexto }) {
  return (
    <header className={styles["topbar"]}>

      <div className={styles["brand"]}>
        <img src="/assets/logo.jpeg" alt="Logo" />
        <h1>
          Conecta <strong>60+</strong>
        </h1>
      </div>

      <nav className={styles["home-container"]}>
        <Link href="/" className="home-button" aria-label="Página inicial" style={estiloTexto}>
          🏠
        </Link>
      </nav>

      <div className={styles["accessibility"]}>
        <p className={styles["accessibility-label"]} style={estiloTexto}>
          Tamanho do texto
        </p>
        
        <button onClick={aumentarFonte} aria-label="Aumentar fonte"> + </button>

        <button onClick={diminuirFonte} aria-label="Diminuir fonte"> - </button>
      </div>

    </header>
  );
}
