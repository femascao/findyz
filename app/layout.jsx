import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}

