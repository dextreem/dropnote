import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createEditNote } from "../../services/apiNotes";

export function useEditNote() {
  const queryClient = useQueryClient();

  const { mutate: editNote, isLoading: isEditing } = useMutation({
    mutationFn: ({ newNoteData, id }) => createEditNote(newNoteData, id),
    onSuccess: () => {
      toast.success("Note successfully edited");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editNote, isEditing };
}
