"use client";

import Link from "next/link";
import {
  Leaf,
  ClipboardCheck,
  Droplets,
  Recycle,
  Truck,
  FlaskConical,
  Globe2,
  Trees,
  Waves,
  Gauge,
  Bot,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Çevre Yönetimi",
    description:
      "Çevre izinleri, mevzuat takibi ve yükümlülüklerinizi tek platformdan yönetin.",
    href: "/hizmetler/cevre-yonetimi",
  },
  {
    icon: ClipboardCheck,
    title: "ÇED Yönetimi",
    description:
      "ÇED süreçlerini planlayın, takip edin ve dijital olarak yönetin.",
    href: "/hizmetler/ced",
  },
  {
    icon: Droplets,
    title: "Atıksu Yönetimi",
    description:
      "Analizler, deşarj izinleri ve arıtma süreçlerini takip edin.",
    href: "/hizmetler/atik-su-yonetimi",
  },
  {
    icon: Recycle,
    title: "Atık Yönetimi",
    description:
      "Atık beyanı, lisanslı firmalar ve tüm atık süreçlerini yönetin.",
    href: "/hizmetler/atik-yonetimi",
  },
  {
    icon: Truck,
    title: "TMGD",
    description:
      "Tehlikeli madde güvenlik danışmanlığı süreçlerini düzenli şekilde yönetin.",
    href: "/hizmetler/tmgd",
  },
  {
    icon: FlaskConical,
    title: "KDU",
    description:
      "Kimyasal değerlendirme, kayıt ve uyumluluk süreçlerini takip edin.",
    href: "/hizmetler/kdu",
  },
  {
    icon: Globe2,
    title: "ESG",
    description:
      "Çevresel, sosyal ve yönetişim performansınızı ölçün ve raporlayın.",
    href: "/hizmetler/esg",
  },
  {
    icon: Trees,
    title: "Karbon Ayak İzi",
    description:
      "ISO 14064 ve GHG Protocol uyumlu karbon hesaplamaları yapın.",
    href: "/hizmetler/karbon-ayak-izi",
  },
  {
    icon: Waves,
    title: "Su Ayak İzi",
    description:
      "Su tüketimini analiz edin ve su ayak izi performansınızı ölçün.",
    href: "/hizmetler/su-ayak-izi",
  },
  {
    icon: Gauge,
    title: "Su Verimliliği",
    description:
      "Su kullanımını izleyin, kayıpları azaltın ve verimlilik fırsatlarını belirleyin.",
    href: "/hizmetler/su-verimliligi",
  },
  {
    icon: Bot,
    title: "Yapay Zekâ",
    description:
      "Arya AI ile çevre süreçlerinizi hızlandırın ve akıllı öneriler alın.",
    href: "/hizmetler/yapay-zeka",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-600">
            Hizmetlerimiz
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Tüm Çevre Süreçleri Tek Platformda
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Arya ECY ile çevre yönetimi, sürdürülebilirlik ve yapay zekâ
            çözümlerini tek merkezden yönetin.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="text-green-700" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-8 flex items-center gap-2 font-semibold text-green-700 transition-all group-hover:gap-4">
                  Detayları Gör
                  <ArrowRight size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}