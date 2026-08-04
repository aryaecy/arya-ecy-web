"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-green-700 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* Sol Alan */}
        <div className="lg:w-1/2">

          <h1 className="text-6xl font-extrabold leading-tight">
            Türkiye'nin
            <br />
            Entegre Çevre
            <br />
            Yönetim Platformu
          </h1>

          <p className="mt-8 text-2xl text-green-100 leading-relaxed">
            Çevre Yönetimi, ÇED, Atık, Atıksu, ESG,
            Karbon Ayak İzi, Su Ayak İzi ve Yapay Zeka
            çözümlerini tek platformda yönetin.
          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="https://app.aryaecy.com"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Platforma Giriş
            </a>

            <a
              href="#iletisim"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition"
            >
              Demo Talep Et
            </a>

          </div>

        </div>

        {/* Sağ Alan */}
        <div className="lg:w-1/2">

          <motion.img
            src="/hero.png"
            alt="Arya Platform"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl shadow-2xl"
          />

        </div>

      </div>
    </motion.section>
  );
}