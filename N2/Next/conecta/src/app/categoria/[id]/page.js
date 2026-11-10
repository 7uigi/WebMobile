
import { notFound } from "next/navigation";

import { categories } from "@/data/categories";

import Header from "@/components/description/Header/Header";
import CategoryHeader from "@/components/description/CategoryHeader/CategoryHeader";
import CategoryContent from "@/components/description/CategoryContent/CategoryContent";
import Emergency from "@/components/Emergency/Emergency";

export default async function CategoryPage({ params }) {
  const { id } = await params;

  const category = categories.find(
    (item) => item.id === id
  );

  if (!category) {
    notFound();
  }

  return (
    <main className="description-page">
      <Header />

      <CategoryHeader category={category} />

      <CategoryContent category={category} />

      <Emergency />
    </main>
  );
}
