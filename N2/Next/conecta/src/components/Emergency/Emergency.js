import styles from "./Emergency.module.css";
const contatos = [
  {
    id: 1,
    imagem: "/assets/policial.jpeg",
    nome: "Polícia",
    telefone: "190",
  },
  {
    id: 2,
    imagem: "/assets/hospital.jpeg",
    nome: "SAMU",
    telefone: "192",
  },
  {
    id: 3,
    imagem: "/assets/bombeiros.jpeg",
    nome: "Bombeiros",
    telefone: "193",
  },
];

export default function Emergency( {estiloTexto} ) {
  return (
    <footer className={styles["footer-style"]}>
      <section className={styles["emergency"]}>
        <div className={styles["emergency-title"]}>
          <p className={styles["alert-icon"]}>!</p>

          <div>
            <p className={["eyebrow"]} style={estiloTexto}>EM CASO DE EMERGÊNCIA</p>
            <h2 style={estiloTexto}>Contatos importantes</h2>
          </div>
        </div>

        <div className={styles["emergency-cards"]}>
          {contatos.map((contato) => (
            <a
              href={`#`}
              className={styles["emergency-card"]}
              key={contato.id}
            >
              <img src={contato.imagem} alt="" />

              <div>
                <p style={estiloTexto}>{contato.nome}</p>
                <p style={estiloTexto}>{contato.telefone}</p>
              </div>

              <b>→</b>
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
