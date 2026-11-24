import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
const servicos = [
  {
    id: 1,
    imagem: "/assets/policial.jpeg",
    titulo: "Segurança",
    descricao: "Orientações e contatos importantes.",
    link: "/categoria/1",
  },
  {
    id: 2,
    imagem: "/assets/uber.jpeg",
    titulo: "Transporte",
    descricao: "Ajuda para se locomover com tranquilidade.",
    link: "/categoria/2",
  },
  {
    id: 3,
    imagem: "/assets/hospital.jpeg",
    titulo: "Saúde",
    descricao: "Serviços de saúde e informações úteis.",
    link: "/categoria/3",
  },
  {
    id: 4,
    imagem: "/assets/bombeiros.jpeg",
    titulo: "Emergência",
    descricao: "Encontre rapidamente quem pode ajudar.",
    link: "/categoria/4",
  },
  {
    id: 5,
    imagem: "/assets/alimento.jpeg",
    titulo: "Alimentação",
    descricao: "Informações sobre alimentação e apoio.",
    link: "/categoria/5",
  },
  {
    id: 6,
    imagem: "/assets/estudo.jpeg",
    titulo: "Aprendizado",
    descricao: "Conteúdos para aprender no seu ritmo.",
    link: "/categoria/6",
  },
];

export default function Services({ estiloTexto }) {
  return (
    <section className={styles["services"]}>
      <div className={styles["section-heading"]}>
        <h2 style={estiloTexto}>Serviços disponíveis</h2>
      </div>

      <div className={styles["cards"]}>
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