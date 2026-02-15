import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "english" | "france";

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "english",
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "language-storage",
    }
  )
);
