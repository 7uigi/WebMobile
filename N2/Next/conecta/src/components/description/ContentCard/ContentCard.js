
import "./ContentCard.css";

export default function ContentCard({ content, estiloTexto}) {
  return (
    <article className="content-card">
      {content.icon && (
        <div className="content-card-icon">
          {content.icon}
        </div>
      )}

      <h3 style={estiloTexto}>{content.title}</h3>

      {content.description && (
        <p>{content.description}</p>
      )}

      {content.link && (
        <a href={content.link} target="_blank" rel="noopener noreferrer">
          Saiba mais →
        </a>
      )}
    </article>
  );
}
