import type { Alarm } from "../../types/alarm";

interface AlarmCardProps {
  alarm: Alarm;
}

function AlarmCard({ alarm }: AlarmCardProps) {
  return (
    <div className="rounded-xl bg-slate-800 p-5 shadow-lg">
      <h3 className="text-xl font-semibold">
        📍 {alarm.title}
      </h3>

      <p className="mt-2 text-slate-300">
        Place: {alarm.placeName || "Unknown"}
      </p>

      <p className="mt-1 text-slate-300">
        Radius: {alarm.radius} m
      </p>

      <p
        className={`mt-3 font-medium ${
          alarm.enabled
            ? "text-emerald-400"
            : "text-red-400"
        }`}
      >
        {alarm.enabled ? "🟢 Enabled" : "🔴 Disabled"}
      </p>
    </div>
  );
}

export default AlarmCard;