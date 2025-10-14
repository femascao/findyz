// app/layout.jsx
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"; // se você tiver Tailwind/CSS global

export const metadata = {
  title: "Findyz",
  description: "Compra e venda de empresas em Portugal",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="pt">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
