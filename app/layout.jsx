import "./globals.css";

export const metadata = {
  title: "Findyz | Compre ou venda empresas verificados em Portugal",
  description:
    "O Findyz liga empreendedores a empresas validadas em Portugal. Compre ou venda negócios com segurança, análise IA e financiamento inteligente.",
  icons: { icon: "/assets/findyz_logo_transparent.png" },
  openGraph: {
    title: "Findyz - Empresas verificadas à venda em Portugal",
    description:
      "Plataforma digital para compra e venda de empresas verificados. Registe-se para o pré-lançamento.",
    images: ["/assets/findyz_logo_transparent.png"],
    url: "https://findyz.pt",
    siteName: "Findyz",
    type: "website",
  },
  verification: {
    google: "EdfXCh222S1MaK2DojP94z1dcDHFHMyV-hg05In1psY",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Findyz",
    url: "https://findyz.pt",
    logo: "/assets/findyz_logo_transparent.png",
  };

  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
