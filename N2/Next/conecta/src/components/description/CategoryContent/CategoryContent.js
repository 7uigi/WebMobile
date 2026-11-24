
import ContentCard from "../ContentCard/ContentCard";
import styles from "./CategoryContent.module.css";

export default function CategoryContent({ category, estiloTexto }) {
  if (!category.contents || category.contents.length === 0) {
    return (
      <section className={styles["category-content"]}>
        <div className={styles["empty-content"]}>
          <h2 style={estiloTexto}>Conteúdo em breve</h2>
          <p style={estiloTexto}>
            Estamos preparando informações para esta categoria.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles["category-content"]}>
      <div className={styles["content-grid"]}>
        {category.contents.map((content) => (
          <ContentCard
            key={content.id}
            content={content}
            estiloTexto={estiloTexto}
          />
        ))}
      </div>
    </section>
  );
}
