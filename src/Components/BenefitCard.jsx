import { unlock } from "../assets/";

// Simple presentational card for a single benefit
export default function BenefitCard({ title, description }) {
  return (
    <div className="flex flex-col justify-start p-8 bg-[#e4e4e47a] backdrop-blur-md w-full md:w-[22rem] min-h-[240px] max-h-[240px] rounded-lg border border-transparent shadow-lg overflow-hidden">
      <img src={unlock} alt="unlock" className="w-10 h-10 mb-4 flex-shrink-0" />
      <h3 className="text-lg font-semibold text-gray-900 flex-shrink-0">
        {title}
      </h3>
      <p className="text-neutral-700 text-sm mt-2 line-clamp-3">
        {description}
      </p>
    </div>
  );
}
