import { useLanguage } from "../context/LanguageContext";
export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button type="button" onClick={toggleLang} aria-label="Toggle language" className="fixed right-4 top-4 z-40 flex items-center gap-1 rounded-full border border-[#d4af6a]/60 bg-[#0c2b25]/85 px-3 py-1.5 text-[11px] font-semibold text-[#f3dfaa] backdrop-blur-sm">
      <span className={lang === "en" ? "text-[#d4af6a]" : "opacity-50"}>EN</span><span className="opacity-30">|</span><span className={lang === "ur" ? "text-[#d4af6a]" : "opacity-50"}>اردو</span>
    </button>
  );
}
