import {
  BrainCircuit,
  Cloud,
  FileCheck2,
  Gauge,
  Leaf,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Çevre Yönetimi Danışmanlığı",
    description:
      "Çevresel yükümlülüklerinizi uzman mühendis kadromuzla mevzuata uygun şekilde yönetin.",
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zekâ Destekli Platform",
    description:
      "Arya AI ile mevzuat, görev, doküman ve raporlama süreçlerinizi hızlandırın.",
  },
  {
    icon: Cloud,
    title: "Bulut Tabanlı Yönetim",
    description:
      "Tesislerinize ve çevre süreçlerinize her yerden güvenli şekilde erişin.",
  },
  {
    icon: Gauge,
    title: "Gerçek Zamanlı Raporlama",
    description:
      "Görevleri, yükümlülükleri ve çevresel performansı anlık olarak takip edin.",
  },
  {
    icon: FileCheck2,
    title: "Mevzuata Uyum",
    description:
      "İzin, lisans, beyan ve bildirim tarihlerini düzenli şekilde yönetin.",
  },
  {
    icon: UsersRound,
    title: "Uzman Mühendis Kadrosu",
    description:
      "Saha deneyimine sahip uzmanlarla teknik destek ve danışmanlık alın.",
  },
];

export default function WhyArya() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-400">
            Neden Arya ECY?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Danışmanlık ve dijital yönetim tek yapıda
          </h2>

          <p className="mt-6 text-lg font-medium leading-8 text-slate-300">
            Arya ECY; çevre yönetimi danışmanlığını, dijital süreç takibini ve
            yapay zekâ destekli çözümleri tek platformda bir araya getirir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}