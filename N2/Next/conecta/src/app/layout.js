
import "./globals.css";

export const metadata = {
  title: "Conecta 60+",
  description: "Informações e serviços acessíveis para pessoas com 60 anos ou mais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
