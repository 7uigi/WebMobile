
export default function Hero({ estiloTexto }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h2>Mais autonomia para o dia a dia.</h2>

        <p className="texto" style={estiloTexto}>
          Informações simples e acessíveis para ajudar pessoas com 60 anos ou
          mais a encontrarem serviços importantes com mais segurança e
          praticidade.
        </p>
      </div>

      <div className="hero-image">
        <img
          src="/assets/intro.jpeg"
          alt="Pessoa idosa utilizando tecnologia"
        />
      </div>
    </section>
  );
}
