import { createContext, useContext, useEffect, useMemo, useState } from "react";
import weddingData from "../data/weddingData";

const Ctx = createContext(null);
const initial = () => {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "ur" || q === "en") return q;
    const s = localStorage.getItem("lang");
    if (s === "ur" || s === "en") return s;
  } catch {}
  return "en";
};
function build(lang) {
  const { ur, ui, ...en } = weddingData;
  if (lang !== "ur") return en;
  return { ...en, ...ur, hero: { ...en.hero, ...ur.hero }, nikah: { ...en.nikah, ...ur.nikah }, venue: { ...en.venue, ...ur.venue } };
}
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initial);
  useEffect(() => { document.documentElement.lang = lang; try { localStorage.setItem("lang", lang); } catch {} }, [lang]);
  const value = useMemo(() => ({ lang, isUr: lang === "ur", toggleLang: () => setLang((l) => (l === "en" ? "ur" : "en")), data: build(lang), t: weddingData.ui[lang] }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useLanguage = () => useContext(Ctx);
