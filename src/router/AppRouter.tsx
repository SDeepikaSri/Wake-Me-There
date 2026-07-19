import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Alarms from "../pages/Alarms";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";
import CreateAlarm from "../pages/CreateAlarm";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alarms" element={<Alarms />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/create-alarm" element={<CreateAlarm />}
/>
    </Routes>
  );
}

export default AppRouter;