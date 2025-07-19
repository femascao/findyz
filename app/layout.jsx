
export const metadata = {
  title: "Findyz - M&A Digital em Portugal",
  description: "Ecossistema completo de compra e venda de empresas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
