interface CircularProgressProps {
  percentage: number;
  strokeWidth?: number; // Thickness of the circle
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  strokeWidth = 14,
}) => {
  const radius = (176 - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Offset based on percentage

  return (
    <div className="relative flex items-center justify-center w-44 h-44">
      {/* Background Circle */}
      <svg className="absolute w-full h-full">
        <circle
          className="text-secondary-dark"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={176 / 2}
          cy={176 / 2}
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute w-full h-full transform scale-x-[-1] rotate-[90deg]">
        <circle
          className="text-primary"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={176 / 2}
          cy={176 / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <span className="text-3xl font-bold text-black">{percentage}%</span>
    </div>
  );
};
