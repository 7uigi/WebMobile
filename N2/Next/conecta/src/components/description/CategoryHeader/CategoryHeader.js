
import styles from "./CategoryHeader.module.css";

export default function CategoryHeader({ category, estiloTexto }) {
  return (
    <section className={styles["category-header"]}>
      <div className={styles["category-icon"]} style={estiloTexto}>
        {category.icon}
      </div>

      <div>
        <h1 style={estiloTexto}>{category.name} </h1>
        <p style={estiloTexto}>{category.description}</p>
      </div>
    </section>
  );
}
