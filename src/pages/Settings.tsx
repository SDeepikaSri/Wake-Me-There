import useAppStore from "../store/useAppStore";

function Settings() {
  const {
    isDarkMode,
    toggleDarkMode,
  } = useAppStore();

  return (
    <div>
      <h2 className="text-3xl font-bold">
        ⚙️ Settings
      </h2>

      <p className="mt-4">
        Dark Mode:
        {" "}
        {isDarkMode ? "ON" : "OFF"}
      </p>

      <button
        onClick={toggleDarkMode}
        className="
          mt-4
          rounded-xl
          bg-emerald-500
          px-5
          py-2
        "
      >
        Toggle
      </button>
    </div>
  );
}

export default Settings;