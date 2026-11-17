
import "./CategoryHeader.css";

export default function CategoryHeader({ category, estiloTexto }) {
  return (
    <section className="category-header">
      <div className="category-icon">
        {category.icon}
      </div>

      <div>
        <h1 style={estiloTexto}>{category.name} </h1>
        <p>{category.description}</p>
      </div>
    </section>
  );
}
