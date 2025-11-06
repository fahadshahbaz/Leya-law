import BenefitCard from "./BenefitCard";

type BenefitItem = { title: string; description: string };
const benefitItems: BenefitItem[] = [
  {
    title: "Unlocked Knowledge",
    description:
      "Surface previous work, policies, and templates from the depths of your organization.",
  },
  {
    title: "Increased Productivity",
    description:
      "Dig deeper into your research. Proof-read in a moment. Consider more factors.",
  },
  {
    title: "Improved Outcomes",
    description:
      "Breeze through tedious tasks and spend your time on creating value for your clients.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="flex flex-col justify-center items-center mt-32 py-16 px-4"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="w-full md:w-9/12 text-center mb-12 mx-auto">
          <p className="text-gray-700 font-medium">Benefits</p>
          <h1 className="text-4xl md:text-5xl font-medium my-4">
            Enhancing legal operations.
          </h1>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-6">
          {benefitItems.map(({ title, description }, idx) => (
            <BenefitCard
              key={title + idx}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
