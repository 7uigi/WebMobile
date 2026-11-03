
export default function ServiceCard({
  imagem,
  titulo,
  descricao,
  estiloTexto,
  link = "#",
}) {
  return (
    <a className="service-card" href={link}>
      <div className="icon">
        <img src={imagem} alt="" />
      </div>

      <div>
        <h3 className="texto" style={estiloTexto}>
          {titulo}
        </h3>

        <p>{descricao}</p>
      </div>

      <p className="arrow">→</p>
    </a>
  );
}
