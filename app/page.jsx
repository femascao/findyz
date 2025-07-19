
'use client';

import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-10 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/findyz_logo_transparent.png"
            alt="Logo Findyz"
            width={160}
            height={60}
          />
        </div>
        <h1 className="text-5xl font-bold leading-tight">
          1º marketplace digital de compra e venda de empresas em Portugal
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Através da inovação, garantimos que o seu legado seja o ponto de partida para um novo sucesso.
        </p>
        <a
          href="#cadastro"
          className="mt-8 inline-block bg-blue-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Cadastrar para o pré-lançamento
        </a>
      </section>
    </div>
  );
}


