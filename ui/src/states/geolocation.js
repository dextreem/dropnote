import { create } from "zustand";

function getPosition(set) {
  if (!navigator.geolocation) {
    set({
      error:
        "Could not get geolocation. Maybe your browser does not support it.",
    });
  }

  set({ isLoading: true });
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      set({
        currentLocation: {
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        },
        isLoading: false,
      });
    },
    (error) => {
      set({ error: error.message, isLoading: false });
    }
  );
}

const useGeolocation = create((set, get) => ({
  currentLocation: null,
  getCurrentLocation: () => getPosition(set),
  error: null,
  isLoading: true,
}));

export default useGeolocation;
