import { useId } from "react";

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
}

export const Rating = ({ value, max = 5, className = "" }: RatingProps) => {
  const gradientId = useId();

  const normalizedValue = Math.min(Math.max(value, 0), max);

  return (
    <div className="flex items-center justify-center gap-x-2 leading-none">
      <span className="text-sm">{value}</span>
      <span
        className={`flex items-center text-[#FF2D87] ${className}`}
        aria-label={`Рейтинг: ${value} из ${max}`}
      >
        {Array.from({ length: max }).map((_, index) => {
          const fillValue = Math.min(Math.max(normalizedValue - index, 0), 1);

          return (
            <svg
              key={index}
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <defs>
                <linearGradient id={`${gradientId}-${index}`}>
                  <stop
                    offset={`${fillValue * 100}%`}
                    stopColor="currentColor"
                  />
                  <stop
                    offset={`${fillValue * 100}%`}
                    stopColor="transparent"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                fill={`url(#${gradientId}-${index})`}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          );
        })}
      </span>
    </div>
  );
};
