import benefitsData from "./BenefitsData.json";

export default function Benefits({ ids = [], title = "un massage relaant" }) {
  const selectedBenefits = benefitsData.filter((b) => ids.includes(b.id));

  if (selectedBenefits.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10">
          Pourquoi choisir {title} ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg text-gray-700">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
