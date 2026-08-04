"use client";

import {
  Leaf,
  ClipboardCheck,
  Recycle,
  Droplets,
  Globe,
  Trees,
  Waves,
  Bot,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Çevre Yönetimi",
    description:
      "Çevre izinleri, mevzuat takibi ve yükümlülüklerinizi tek platformdan yönetin.",
  },
  {
    icon: ClipboardCheck,
    title: "ÇED Yönetimi",
    description:
      "ÇED süreçlerini planlayın, takip edin ve dijital olarak yönetin.",
  },
  {
    icon: Recycle,
    title: "Atık Yönetimi",
    description:
      "Atık beyanı, lisanslı firmalar ve tüm süreçlerinizi yönetin.",
  },
  {
    icon: Droplets,
    title: "Atıksu Yönetimi",
    description:
      "Analizler, deşarj izinleri ve arıtma süreçlerini takip edin.",
  },
  {
    icon: Globe,
    title: "ESG Yönetimi",
    description:
      "Kurumsal sürdürülebilirlik performansınızı ölçün ve raporlayın.",
  },
  {
    icon: Trees,
    title: "Karbon Ayak İzi",
    description:
      "ISO 14064 ve GHG Protocol uyumlu karbon hesaplamaları yapın.",
  },
  {
    icon: Waves,
    title: "Su Ayak İzi",
    description:
      "Su tüketimini analiz edin ve verimlilik fırsatlarını belirleyin.",
  },
  {
    icon: Bot,
    title: "Arya AI",
    description:
      "Yapay zekâ destekli çevre danışmanı ile tüm süreçlerinizi hızlandırın.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Hizmetlerimiz
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Tüm Çevre Süreçleri Tek Platformda
          </h2>

          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Arya ECY ile çevre yönetimi, sürdürülebilirlik ve yapay zekâ
            çözümlerini tek merkezden yönetin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-700" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all">
                  Detayları Gör
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}