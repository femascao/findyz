export const metadata = {
  title: "Findyz",
  description: "Marketplace digital de compra e venda de empresas em Portugal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}

