import styles from "./Hero.module.css";
export default function Hero({ estiloTexto }) {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-copy"]}>
        <h2 style={estiloTexto}>Mais autonomia para o dia a dia.</h2>

        <p className={styles["texto"]} style={estiloTexto}>
          Informações simples e acessíveis para ajudar pessoas com 60 anos ou
          mais a encontrarem serviços importantes com mais segurança e
          praticidade.
        </p>
      </div>

      <div className={styles["hero-image"]}>
        <img
          src="/assets/intro.jpeg"
          alt="Pessoa idosa utilizando tecnologia"
        />
      </div>
    </section>
  );
}
