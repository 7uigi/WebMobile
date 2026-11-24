import Link from "next/link";
import styles from "./Services.module.css";
export default function ServiceCard({
  imagem,
  titulo,
  descricao,
  estiloTexto,
  link = "#",
}) {
  return (
    <Link className={styles["service-card"]} href={link}>
      <div className={styles["icon"]}>
        <img src={imagem} alt="" />
      </div>

      <div>
        <h3 className={styles["texto"]} style={estiloTexto}>
          {titulo}
        </h3>

        <p style={estiloTexto}>{descricao}</p>
      </div>

      <p className={styles["arrow"]}>→</p>
    </Link>
  );
}