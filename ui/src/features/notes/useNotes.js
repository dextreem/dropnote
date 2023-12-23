import { useQuery } from "@tanstack/react-query";

import { getNotes } from "../../services/apiNotes";
import useGeolocation from "../../states/geolocation";

export function useNotes() {
  const { currentLocation } = useGeolocation();

  const location = currentLocation || { lat: 49.444, long: 7.7692 };

  const {
    isLoading,
    data: notes,
    error,
  } = useQuery({
    queryKey: ["notes", location],
    queryFn: () => getNotes(location),
  });

  return { isLoading, error, notes };
}
