export interface Alarm {
  id: string;

  title: string;

  placeName: string;

  latitude: number;

  longitude: number;

  radius: number;

  sound: string;

  enabled: boolean;

  repeat: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };

  snoozeMinutes: number;

  createdAt: number;
}