import { create } from "zustand";

const useSelectedNotes = create((set) => ({
  selectedNote: {},
  setSelectedNote: (note) => {
    set(() => ({
      selectedNote: note,
    }));
  },
}));

export default useSelectedNotes;
