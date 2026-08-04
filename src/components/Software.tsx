"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BellRing,
  BrainCircuit,
  ClipboardCheck,
  FileText,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Gerçek Zamanlı Dashboard",
    description:
      "Tüm çevresel performans verilerini, görevleri ve kritik uyarıları tek ekrandan izleyin.",
  },
  {
    icon: BellRing,
    title: "Akıllı Bildirimler",
    description:
      "Yaklaşan izin, belge, analiz ve yükümlülük tarihlerini zamanında takip edin.",
  },
  {
    icon: ClipboardCheck,
    title: "Görev ve Süreç Yönetimi",
    description:
      "Müşteri, tesis ve kullanıcı bazlı görevleri planlayın ve sonuçlarını izleyin.",
  },
  {
    icon: FileText,
    title: "Raporlama Merkezi",
    description:
      "Çevre, sürdürülebilirlik, karbon ve su yönetimi raporlarını düzenli şekilde yönetin.",
  },
  {
    icon: Smartphone,
    title: "Mobil Erişim",
    description:
      "Saha ekiplerinin telefon ve tablet üzerinden sisteme güvenli şekilde erişmesini sağlayın.",
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zekâ Desteği",
    description:
      "Arya AI ile analiz, doküman hazırlama ve süreç yönlendirmelerini hızlandırın.",
  },
];

export default function Software() {
  return (
    <section
      id="yazilim"
      className="overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-semibold uppercase tracking-[0.2em] text-green-400">
            Arya ECY Platformu
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Çevre süreçlerinizi tek merkezden yönetin
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Görevlerden izin takibine, doküman yönetiminden sürdürülebilirlik
            performansına kadar tüm operasyonlarınızı dijital, ölçülebilir ve
            güvenli bir altyapıyla yönetin.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://app.aryaecy.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-500 px-7 py-4 font-semibold text-white transition hover:bg-green-400"
            >
              Platforma Giriş
            </a>

            <a
              href="#iletisim"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              Demo Talep Et
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-full bg-green-500/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <img
              src="/hero.png"
              alt="Arya ECY çevre yönetim platformu"
              className="w-full rounded-3xl"
            />

            <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl md:block">
              <p className="text-sm text-slate-400">Aktif Süreçler</p>
              <p className="mt-2 text-3xl font-bold text-green-400">24</p>
              <p className="mt-1 text-xs text-slate-500">
                Bugün güncellenen görevler
              </p>
            </div>

            <div className="absolute -right-5 -top-7 hidden w-56 rounded-2xl border border-white/10 bg-white p-5 text-slate-900 shadow-2xl md:block">
              <p className="text-sm text-slate-500">Uyum Durumu</p>
              <p className="mt-2 text-3xl font-bold text-green-700">%96</p>
              <p className="mt-1 text-xs text-slate-500">
                Güncel çevresel uyum skoru
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}