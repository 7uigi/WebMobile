
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

export default function Emergency() {
  return (
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
          {contatos.map((contato) => (
            <a
              href={`tel:${contato.telefone}`}
              className="emergency-card"
              key={contato.id}
            >
              <img src={contato.imagem} alt="" />

              <div>
                <p>{contato.nome}</p>
                <p>{contato.telefone}</p>
              </div>

              <b>→</b>
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
