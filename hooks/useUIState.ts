import { create } from "zustand";

interface UIState {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (category: string) => void;
  setHeaderImageSrc: (src: string) => void;
}

const useUIState = create<UIState>((set) => ({
  homeCategory: "",
  headerImageSrc: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (category: string) => set({ homeCategory: category }),
  setHeaderImageSrc: (src: string) => set({ headerImageSrc: src }),
}));

export default useUIState;
