
import ContentCard from "../ContentCard/ContentCard";
import "./CategoryContent.css";

export default function CategoryContent({ category }) {
  if (!category.contents || category.contents.length === 0) {
    return (
      <section className="category-content">
        <div className="empty-content">
          <h2>Conteúdo em breve</h2>
          <p>
            Estamos preparando informações para esta categoria.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="category-content">
      <div className="content-grid">
        {category.contents.map((content) => (
          <ContentCard
            key={content.id}
            content={content}
          />
        ))}
      </div>
    </section>
  );
}
