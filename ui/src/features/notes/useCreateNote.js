import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createEditNote } from "../../services/apiUsers";

export function useCreateNote() {
  const queryClient = useQueryClient();

  const { mutate: createNote, isLoading: isCreating } = useMutation({
    mutationFn: createEditNote,
    onSuccess: () => {
      toast.success("Successfully create a new note!");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createNote, isCreating };
}
