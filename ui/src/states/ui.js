import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const NOTES_COMPONENTS = {
  ALL: "",
  NOTES_LIST: "notes_list",
  NOTES_MAP: "notes_map",
};

const useUiState = create(
  devtools(
    persist(
      (set, get) => ({
        noteViewVisibleComponent: NOTES_COMPONENTS.LIST,
        setNoteVisibleComponent: (component) => {
          set({ noteViewVisibleComponent: component });
        },
        isVisible: (component) => get().noteViewVisibleComponent === component,
      }),
      {
        name: "uiState",
        onRehydrateStorage: (state) => {
          return (state, error) => {
            if (error) {
              console.log(
                "an error happened during ui state data hydration",
                error
              );
            }
          };
        },
      }
    )
  )
);

export default useUiState;
