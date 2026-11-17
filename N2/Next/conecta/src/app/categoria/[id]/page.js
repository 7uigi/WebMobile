
"use client";

import { useEffect, useState } from "react";

import Header from "@/components/description/Header/Header";
import CategoryHeader from "@/components/description/CategoryHeader/CategoryHeader";
import CategoryContent from "@/components/description/CategoryContent/CategoryContent";
import Emergency from "@/components/Emergency/Emergency";

export default function CategoryPage({ params }) {
  const [id, setId] = useState(null);
  const [category, setCategory] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarCategoria() {
      try {
        const resolvedParams = await params;
        setId(resolvedParams.id);
      } catch (error) {
        setErro(true);
        setCarregando(false);
      }
    }

    carregarCategoria();
  }, [params]);

  useEffect(() => {
    if (!id) return;

    async function buscarCategoria() {
      try {
        const response = await fetch("/api/categories");

        if (!response.ok) {
          throw new Error("Erro ao buscar categorias");
        }

        const categories = await response.json();

        const encontrada = categories.find(
          (item) => item.id === id
        );

        setCategory(encontrada || null);
      } catch (error) {
        console.error(error);
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    buscarCategoria();
  }, [id]);

  const [tamanhoFonte, setTamanhoFonte] = useState(32);

  const aumentarFonte = () => {
    setTamanhoFonte((prev) =>
      prev < 60 ? prev + 2 : prev
    );
  };

  const diminuirFonte = () => {
    setTamanhoFonte((prev) =>
      prev > 20 ? prev - 2 : prev
    );
  };

  const estiloTexto = {
    fontSize: `${tamanhoFonte}px`,
  };

  if (carregando) {
    return <p>Carregando categoria...</p>;
  }

  if (erro) {
    return <p>Não foi possível carregar os dados.</p>;
  }

  if (!category) {
    return <p>Categoria não encontrada.</p>;
  }

  return (
    <main
      className="description-page"
      style={{ "--font-scale": tamanhoFonte }}
    >
      <Header
        aumentarFonte={aumentarFonte}
        diminuirFonte={diminuirFonte}
      />

      <CategoryHeader category={category} estiloTexto={estiloTexto} />

      <CategoryContent category={category} estiloTexto={estiloTexto} />

      <Emergency />
    </main>
  );
}
