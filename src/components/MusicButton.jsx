export default function MusicButton({ playing, onToggle }) {
  return (
    <button type="button" onClick={onToggle} aria-label={playing ? "Pause music" : "Play music"} className="fixed left-4 top-4 z-40 grid h-9 w-9 place-items-center rounded-full border border-[#d4af6a]/60 bg-[#0c2b25]/85 text-[#d4af6a] backdrop-blur-sm active:scale-90">
      {playing ? (
        <span className="flex h-3.5 items-end gap-[2px]">{[0, 0.2, 0.4].map((d) => <i key={d} className="mb" style={{ animationDelay: d + "s" }} />)}</span>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="m22 9-6 6M16 9l6 6" /></svg>
      )}
      <style>{".mb{display:block;width:2.5px;height:100%;border-radius:2px;background:currentColor;transform-origin:bottom;animation:mbo .9s ease-in-out infinite}@keyframes mbo{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}"}</style>
    </button>
  );
}
