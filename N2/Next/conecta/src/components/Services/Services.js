
import ServiceCard from "./ServiceCard";

const servicos = [
  {
    id: 1,
    imagem: "/assets/policial.jpeg",
    titulo: "Segurança",
    descricao: "Orientações e contatos importantes.",
  },
  {
    id: 2,
    imagem: "/assets/uber.jpeg",
    titulo: "Transporte",
    descricao: "Ajuda para se locomover com tranquilidade.",
  },
  {
    id: 3,
    imagem: "/assets/hospital.jpeg",
    titulo: "Saúde",
    descricao: "Serviços de saúde e informações úteis.",
  },
  {
    id: 4,
    imagem: "/assets/bombeiros.jpeg",
    titulo: "Emergência",
    descricao: "Encontre rapidamente quem pode ajudar.",
  },
  {
    id: 5,
    imagem: "/assets/alimento.jpeg",
    titulo: "Alimentação",
    descricao: "Informações sobre alimentação e apoio.",
  },
  {
    id: 6,
    imagem: "/assets/estudo.jpeg",
    titulo: "Aprendizado",
    descricao: "Conteúdos para aprender no seu ritmo.",
  },
];

export default function Services({ estiloTexto }) {
  return (
    <section className="services">
      <div className="section-heading">
        <h2>Serviços disponíveis</h2>
        <p>
          Encontre informações e serviços importantes para facilitar seu dia
          a dia.
        </p>
      </div>

      <div className="cards">
        {servicos.map((servico) => (
          <ServiceCard
            key={servico.id}
            {...servico}
            estiloTexto={estiloTexto}
          />
        ))}
      </div>
    </section>
  );
}
