import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../store/useAppStore";
import type { Alarm } from "../types/alarm";
import Button from "../components/common/Button";

function CreateAlarm() {
  const navigate = useNavigate();

  const addAlarm = useAppStore(
    (state) => state.addAlarm
  );

  const [placeName, setPlaceName] = useState("");

  const [radius, setRadius] = useState(500);


  function createAlarm() {
    const alarm: Alarm = {
      id: crypto.randomUUID(),

      title: placeName || "New Alarm",

      placeName,

      latitude: 0,

      longitude: 0,

      radius,

      sound: "default",

      enabled: true,

      repeat: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },

      snoozeMinutes: 5,

      createdAt: Date.now(),
    };


    addAlarm(alarm);

    navigate("/alarms");
  }


  return (
    <div>

      <h2 className="text-3xl font-bold">
        Create Alarm
      </h2>


      <div className="mt-8 space-y-5">


        <div>
          <label className="block mb-2">
            Place Name
          </label>

          <input
            value={placeName}
            onChange={(e) =>
              setPlaceName(e.target.value)
            }
            placeholder="Example: Office"
            className="
              w-full
              rounded-xl
              bg-slate-800
              px-4
              py-3
              outline-none
            "
          />
        </div>



        <div>
          <label className="block mb-2">
            Alert Radius: {radius} meters
          </label>

          <input
            type="range"
            min="50"
            max="5000"
            value={radius}
            onChange={(e) =>
              setRadius(
                Number(e.target.value)
              )
            }
            className="w-full"
          />
        </div>



        <Button onClick={createAlarm}>
          Save Alarm
        </Button>


      </div>

    </div>
  );
}

export default CreateAlarm;