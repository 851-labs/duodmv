export function HandSignalsDiagram() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-surface-200">
      <div className="grid grid-cols-3 gap-4">
        {/* Left Turn */}
        <div className="text-center">
          <div className="bg-sky-50 rounded-xl p-4 mb-3">
            <svg
              viewBox="0 0 120 160"
              className="w-full h-32 mx-auto"
              aria-label="Left turn hand signal"
            >
              {/* Car body */}
              <rect x="25" y="70" width="70" height="50" rx="8" fill="#22c55e" />
              <rect x="35" y="55" width="50" height="25" rx="5" fill="#22c55e" />
              {/* Windows */}
              <rect x="40" y="60" width="18" height="15" rx="2" fill="#bfdbfe" />
              <rect x="62" y="60" width="18" height="15" rx="2" fill="#bfdbfe" />
              {/* Wheels */}
              <circle cx="42" cy="120" r="12" fill="#374151" />
              <circle cx="78" cy="120" r="12" fill="#374151" />
              <circle cx="42" cy="120" r="6" fill="#9ca3af" />
              <circle cx="78" cy="120" r="6" fill="#9ca3af" />
              {/* Left arm extended straight out */}
              <line
                x1="25"
                y1="85"
                x2="-15"
                y2="85"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Hand */}
              <circle cx="-15" cy="85" r="6" fill="#fbbf24" />
              {/* Arrow indicator */}
              <path
                d="M -5 70 L -20 85 L -5 100"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-semibold text-zinc-900">Left Turn</p>
          <p className="text-sm text-zinc-500">Arm straight out</p>
        </div>

        {/* Right Turn */}
        <div className="text-center">
          <div className="bg-sky-50 rounded-xl p-4 mb-3">
            <svg
              viewBox="0 0 120 160"
              className="w-full h-32 mx-auto"
              aria-label="Right turn hand signal"
            >
              {/* Car body */}
              <rect x="25" y="70" width="70" height="50" rx="8" fill="#22c55e" />
              <rect x="35" y="55" width="50" height="25" rx="5" fill="#22c55e" />
              {/* Windows */}
              <rect x="40" y="60" width="18" height="15" rx="2" fill="#bfdbfe" />
              <rect x="62" y="60" width="18" height="15" rx="2" fill="#bfdbfe" />
              {/* Wheels */}
              <circle cx="42" cy="120" r="12" fill="#374151" />
              <circle cx="78" cy="120" r="12" fill="#374151" />
              <circle cx="42" cy="120" r="6" fill="#9ca3af" />
              <circle cx="78" cy="120" r="6" fill="#9ca3af" />
              {/* Left arm out and bent up */}
              <line
                x1="25"
                y1="85"
                x2="0"
                y2="85"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="85"
                x2="0"
                y2="55"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Hand */}
              <circle cx="0" cy="55" r="6" fill="#fbbf24" />
              {/* Arrow indicator */}
              <path
                d="M -10 65 L 0 50 L 10 65"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-semibold text-zinc-900">Right Turn</p>
          <p className="text-sm text-zinc-500">Arm up at 90°</p>
        </div>

        {/* Slow or Stop */}
        <div className="text-center">
          <div className="bg-sky-50 rounded-xl p-4 mb-3">
            <svg
              viewBox="0 0 120 160"
              className="w-full h-32 mx-auto"
              aria-label="Slow or stop hand signal"
            >
              {/* Car body */}
              <rect x="25" y="70" width="70" height="50" rx="8" fill="#22c55e" />
              <rect x="35" y="55" width="50" height="25" rx="5" fill="#22c55e" />
              {/* Windows */}
              <rect x="40" y="60" width="18" height="15" rx="2" fill="#bfdbfe" />
              <rect x="62" y="60" width="18" height="15" rx="2" fill="#bfdbfe" />
              {/* Wheels */}
              <circle cx="42" cy="120" r="12" fill="#374151" />
              <circle cx="78" cy="120" r="12" fill="#374151" />
              <circle cx="42" cy="120" r="6" fill="#9ca3af" />
              <circle cx="78" cy="120" r="6" fill="#9ca3af" />
              {/* Left arm out and bent down */}
              <line
                x1="25"
                y1="85"
                x2="0"
                y2="85"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="85"
                x2="0"
                y2="115"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Hand */}
              <circle cx="0" cy="115" r="6" fill="#fbbf24" />
              {/* Arrow indicator */}
              <path
                d="M -10 105 L 0 120 L 10 105"
                stroke="#ef4444"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-semibold text-zinc-900">Slow or Stop</p>
          <p className="text-sm text-zinc-500">Arm down at 90°</p>
        </div>
      </div>

      <p className="text-center text-sm text-zinc-500 mt-4">
        Use these hand signals when your turn signals aren't working or are hard to see
      </p>
    </div>
  );
}
