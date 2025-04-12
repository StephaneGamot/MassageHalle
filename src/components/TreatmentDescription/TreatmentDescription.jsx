

export default function TreatmentDescription ({title, hero, duration, text, price}) {
  return (
    <section className="py-20 bg-gray-50">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <h2 className="text-3xl font-serif font-semibold text-gray-900">
        {title}
      </h2>
      <p className="mt-6 text-lg text-gray-700">
        {hero}
      </p>
      <p className="mt-6 text-base text-gray-600">
        Disponible en cabinet à Halle ou à domicile dans les alentours de
        Bruxelles.
        <br />
        Chaque séance dure {duration}, pour vous offrir un moment
        pleinement ressourçant.
      </p>
      <p className="mt-4 text-base text-gray-600">
        {text}
        <span className="ml-1 text-[#556B2F] font-semibold">{price}</span>.
      </p>
    </div>
  </section>
  )
}
