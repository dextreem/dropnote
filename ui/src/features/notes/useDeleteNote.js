import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteNote as apiDeleteNote } from "../../services/apiNotes";

export function useDeleteNote() {
  const queryClient = useQueryClient();

  const { mutate: deleteNote, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteNote(id),
    onSuccess: () => {
      toast.success("Note successfully edited");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteNote, isDeleting };
}
