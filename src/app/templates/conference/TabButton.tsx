interface TabButtonProps {
  day: string;
  date: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TabButton({
  day,
  date,
  isActive = false,
  onClick,
}: TabButtonProps) {
  return (
    <div className="relative lg:pl-8">
      <svg
        aria-hidden="true"
        viewBox="0 0 6 6"
        className={`absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block ${
          isActive
            ? "fill-orange-600 stroke-orange-600"
            : "fill-transparent stroke-emerald-600"
        }`}
      >
        <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="relative">
        <div
          className={`font-mono text-sm ${
            isActive ? "text-orange-600" : "text-emerald-600"
          }`}
        >
          <button
            className="data-selected:not-data-focus:outline-hidden"
            role="tab"
            onClick={onClick}
            type="button"
          >
            <span className="absolute inset-0" />
            {day}
          </button>
        </div>
        <time
          dateTime={date}
          className="mt-1.5 block text-2xl font-semibold tracking-tight text-gray-900"
        >
          {date}
        </time>
      </div>
    </div>
  );
}
