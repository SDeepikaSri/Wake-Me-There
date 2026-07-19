import { create } from "zustand";
import type { Alarm } from "../types/alarm";

interface AppState {
  appName: string;

  isDarkMode: boolean;

  alarms: Alarm[];

  toggleDarkMode: () => void;

  addAlarm: (alarm: Alarm) => void;

  removeAlarm: (id: string) => void;
}


const useAppStore = create<AppState>((set) => ({
  appName: "Wake Me There",

  isDarkMode: true,

  alarms: [],


  toggleDarkMode: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),


  addAlarm: (alarm) =>
    set((state) => ({
      alarms: [
        ...state.alarms,
        alarm,
      ],
    })),


  removeAlarm: (id) =>
    set((state) => ({
      alarms: state.alarms.filter(
        (alarm) => alarm.id !== id
      ),
    })),
}));


export default useAppStore;