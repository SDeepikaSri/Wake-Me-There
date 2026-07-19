import AlarmCard from "../components/common/AlarmCard";
import useAppStore from "../store/useAppStore";

function Alarms() {
  const alarms = useAppStore((state) => state.alarms);

  return (
    <div>
      <h2 className="text-3xl font-bold">🚨 Alarms</h2>

      {alarms.length === 0 ? (
        <div className="mt-8 rounded-xl bg-slate-800 p-6 text-center">
          <p className="text-slate-400">
            No alarms created yet.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {alarms.map((alarm) => (
            <AlarmCard
              key={alarm.id}
              alarm={alarm}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Alarms;