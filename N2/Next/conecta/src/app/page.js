
"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Emergency from "@/components/Emergency/Emergency";

export default function Home() {
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

  return (
    <>
      <Header
        aumentarFonte={aumentarFonte}
        diminuirFonte={diminuirFonte}
      />

      <main>
        <Hero estiloTexto={estiloTexto} />

        <Services estiloTexto={estiloTexto} />
      </main>

      <Emergency />
    </>
  );
}
