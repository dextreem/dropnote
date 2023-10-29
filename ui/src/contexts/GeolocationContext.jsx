import { createContext, useContext, useEffect, useReducer } from "react";

const GeolocationContext = createContext();

const BASE_URL = "http://localhost:9000";

const initialState = {
  geolocation: { lat: 52.5, lng: 13.4 },
  isLoading: false,
  error: "",
  notes: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "position/updating":
      return { ...state, isLoading: true };
    case "position/updated":
      return { ...state, isLoading: false, geolocation: action.payload };
    case "notes/loading":
      return { ...state, isLoading: true };
    case "notes/loaded":
      return { ...state, isLoading: false, notes: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action", action.type);
  }
}

function GeolocationProvider({ children }) {
  const [{ geolocation, isLoading, error, notes }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // TODO: Fetch only the ones in a location, i.e., provide the geolocation here
  useEffect(() => {
    async function fetchNotes() {
      dispatch({ type: "notes/loading" });

      try {
        const res = await fetch(`${BASE_URL}/notes`);
        const data = await res.json();
        dispatch({
          type: "notes/loaded",
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "Error while loading notes " + err,
        });
      }
    }
    fetchNotes();
  }, []);

  useEffect(() => {
    function updateGeolocation() {
      if (!navigator.geolocation)
        return dispatch({
          type: "rejected",
          payload: "Your browser does not support geolocation",
        });

      dispatch({ type: "position/updating" });
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          dispatch({
            type: "position/updated",
            payload: { lat: pos.coords.latitude, lng: pos.coords.longitude },
          });
        },
        (error) => {
          dispatch({ type: "rejected", payload: error.message });
        }
      );
    }
    updateGeolocation();
    const id = setInterval(() => updateGeolocation(), 5000);

    return () => clearInterval(id);
  }, []);

  async function createNote() {
    throw new Error("Not yet implemented");
  }
  async function deleteNote() {
    throw new Error("Not yet implemented");
  }

  return (
    <GeolocationContext.Provider
      value={{
        geolocation,
        isLoading,
        error,
        notes,
        createNote,
        deleteNote,
      }}
    >
      {children}
    </GeolocationContext.Provider>
  );
}

function useGeolocation() {
  const context = useContext(GeolocationContext);
  if (context === undefined) {
    throw new Error(
      "GeolocationContext was used outsides the GeolocationProvider"
    );
  }
  return context;
}

export { GeolocationProvider, useGeolocation };
