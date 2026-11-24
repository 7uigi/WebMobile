
import styles from "./ContentCard.module.css";

export default function ContentCard({ content, estiloTexto}) {
  return (
    <article className={styles["content-card"]}>
      {content.icon && (
        <div className={styles["content-card-icon"]} style={estiloTexto}>
          {content.icon}
        </div>
      )}

      <h3 style={estiloTexto}>{content.title}</h3>

      {content.description && (
        <p style={estiloTexto}>{content.description}</p>
      )}

      {content.link && (
        <a href={content.link} target="_blank" rel="noopener noreferrer">
          Saiba mais →
        </a>
      )}
    </article>
  );
}
