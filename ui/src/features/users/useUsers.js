import { useQuery } from "@tanstack/react-query";

import { getUser } from "../../services/apiUsers";

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });

  return { isLoading, error, users };
}
