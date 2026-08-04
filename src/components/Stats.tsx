const stats = [
  ["500+", "Kurumsal Firma"],
  ["2500+", "Tamamlanan Proje"],
  ["81", "İlde Hizmet"],
  ["99%", "Müşteri Memnuniyeti"],
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900">
            Rakamlarla Arya ECY
          </h2>

          <p className="text-slate-600 mt-6 text-xl">
            Türkiye'nin dijital çevre yönetim platformu
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map(([number,title])=>(
            <div
              key={title}
              className="bg-green-700 rounded-3xl text-white text-center py-12 shadow-xl hover:scale-105 transition"
            >
              <div className="text-5xl font-bold">
                {number}
              </div>

              <div className="mt-4 text-green-100">
                {title}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}