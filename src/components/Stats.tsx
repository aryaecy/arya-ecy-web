const stats = [
  {
    number: "50+",
    title: "Kurumsal Firma",
    description: "Farklı sektörlerden işletmeler",
  },
  {
    number: "1200+",
    title: "Tamamlanan Proje",
    description: "Çevre ve sürdürülebilirlik çalışması",
  },
  {
    number: "81",
    title: "İlde Hizmet",
    description: "Türkiye genelinde erişim",
  },
  {
    number: "%99",
    title: "Müşteri Memnuniyeti",
    description: "Uzun vadeli iş birliği yaklaşımı",
  },
];
export default function Stats() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-green-700">
            Rakamlarla Arya ECY
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Ölçülebilir, Güvenilir ve Sürdürülebilir Yönetim
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-700">
            Çevre yönetimi danışmanlığı, dijital süreç yönetimi ve
            sürdürülebilirlik çözümlerimizi tek platformda sunuyoruz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
            >
              <div className="text-5xl font-extrabold tracking-tight text-green-700">
                {stat.number}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {stat.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}