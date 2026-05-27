import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Search, User, ShoppingCart, MessageCircle } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construmais — Explore um novo mundo" },
      { name: "description", content: "Mais facilidade para fazer negócios, conteúdos personalizados e parceria para o seu negócio." },
    ],
  }),
  component: Index,
});

const slides = [
  { src: product1, alt: "Pregos com cabeça" },
  { src: product2, alt: "Vergalhões e telas" },
  { src: product3, alt: "Arame e parafusos" },
];

function Index() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="px-8 py-5">
        <nav className="flex items-center justify-between max-w-[1400px] mx-auto">
          <ul className="flex items-center gap-10 text-[15px] font-medium text-slate-700">
            <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">Produtos e Soluções <ChevronDown className="w-4 h-4" /></li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">Documentos <ChevronDown className="w-4 h-4" /></li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">Contato <ChevronDown className="w-4 h-4" /></li>
            <li className="cursor-pointer hover:text-blue-600">Blog</li>
          </ul>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 text-[15px]">
              <Search className="w-4 h-4" /> Buscar
            </button>
            <button className="flex items-center gap-2 text-blue-600 hover:underline text-[15px] font-medium">
              <User className="w-4 h-4" /> Área do cliente
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-[15px] font-medium">
              <ShoppingCart className="w-4 h-4" /> Faça sua cotação
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900">
            Explore um novo<br />mundo.
          </h1>
          <p className="mt-8 text-slate-500 text-[17px] leading-relaxed max-w-xl">
            Mais facilidade para fazer negócios, conteúdos mais personalizados para apoiar as suas decisões no dia a dia, mais agilidade na troca de informações e mais parceria para te ajudar a alcançar as metas mais desafiadoras.
          </p>
          <p className="mt-4 font-semibold text-slate-900">
            Construmais é o novo parceiro do seu negócio.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-medium">
            <ShoppingCart className="w-4 h-4" /> Faça sua cotação
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Decorative yellow squares */}
          <div className="absolute -top-4 right-10 w-10 h-10 bg-yellow-400 rounded-sm" />
          <div className="absolute top-24 -left-2 w-8 h-8 bg-yellow-400 rounded-sm" />
          <div className="absolute bottom-10 -right-4 w-12 h-12 bg-yellow-400 rounded-sm" />
          <div className="absolute -bottom-2 right-32 w-9 h-9 bg-yellow-400 rounded-sm" />

          <div className="relative overflow-hidden rounded-lg aspect-square bg-white">
            {slides.map((s, idx) => (
              <img
                key={idx}
                src={s.src}
                alt={s.alt}
                width={1024}
                height={1024}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-blue-600" : "w-2 bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Floating buttons */}
      <button className="fixed bottom-20 right-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-full font-medium shadow-lg">
        Solicite seu Orçamento
      </button>
      <button
        aria-label="Chat"
        className="fixed bottom-6 right-8 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
