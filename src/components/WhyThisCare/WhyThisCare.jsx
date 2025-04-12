import questionsData from "./whyThisCareData.json";

export default function WhyThisCare({ ids = [], title = "À qui s’adresse ce soin ?" }) {
  const selectedQuestions = questionsData.filter((q) => ids.includes(q.id));

  if (selectedQuestions.length === 0) return null;

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8">
          {title}
        </h2>
        <ul className="text-left space-y-4 text-lg text-gray-700 list-disc list-inside">
          {selectedQuestions.map((q) => (
            <li key={q.id}>{q.question}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
