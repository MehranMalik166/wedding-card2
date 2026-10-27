import { useState } from "react";
import { motion } from "framer-motion";

const lattice = "repeating-linear-gradient(45deg,rgba(212,175,106,.22) 0 1px,transparent 1px 16px),repeating-linear-gradient(-45deg,rgba(212,175,106,.22) 0 1px,transparent 1px 16px)";
const stars = Array.from({ length: 40 }, (_, i) => ({ x: (i * 37) % 100, y: (i * 53) % 100, d: (i % 5) * 0.6, s: 1 + (i % 3) }));

export default function Gate({ onTap, onOpened }) {
  const [stage, setStage] = useState("closed");
  const open = stage !== "closed";
  const tap = () => {
    if (open) return;
    onTap?.();
    setStage("opening");
    setTimeout(() => setStage("fading"), 1800);
    setTimeout(() => onOpened?.(), 2400);
  };
  const door = (side) => ({
    className: `absolute top-0 h-full w-1/2 ${side === "l" ? "left-0 border-r" : "right-0 border-l"} border-[#d4af6a]/50`,
    style: { transformOrigin: side === "l" ? "left center" : "right center", background: `${lattice},linear-gradient(160deg,#145a4a,#0b3329)` },
    animate: { rotateY: open ? (side === "l" ? -108 : 108) : 0 },
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  });
  return (
    <motion.div className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#071a16]" animate={{ opacity: stage === "fading" ? 0 : 1 }} transition={{ duration: 0.6 }}>
      <style>{"@keyframes tw{0%,100%{opacity:.15}50%{opacity:1}}"}</style>
      {stars.map((s, i) => (
        <i key={i} className="absolute rounded-full bg-[#f3dfaa]" style={{ left: s.x + "%", top: s.y + "%", width: s.s, height: s.s, animation: `tw 3s ${s.d}s infinite` }} />
      ))}
      <div className="relative h-[72svh] max-h-[560px] w-[min(82vw,340px)] overflow-hidden rounded-t-[999px] border-2 border-[#d4af6a]/70 shadow-[0_0_70px_rgba(212,175,106,.3)]" style={{ perspective: 1200 }}>
        <div className="absolute inset-0 grid place-items-center" style={{ background: "radial-gradient(circle at 50% 55%,#f6dfa0,#b98a3e 60%,#0c2b25)" }}>
          <p dir="rtl" className="px-6 text-center font-serif text-3xl leading-[1.8] text-[#2a1c08]">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        </div>
        <motion.div {...door("l")} />
        <motion.div {...door("r")} />
       <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" animate={{ scale: open ? 0 : [1, 1.06, 1], opacity: open ? 0 : 1 }} transition={open ? { duration: 0.4 } : { duration: 2.4, repeat: Infinity }}>
  <button onClick={tap} aria-label="Tap to open" className="grid h-20 w-20 cursor-pointer place-items-center rounded-full text-3xl text-[#3a2808] shadow-[0_8px_24px_rgba(0,0,0,.5)]" style={{ background: "conic-gradient(from 200deg,#f6dfa0,#b98a3e,#f6dfa0,#b98a3e,#f6dfa0)" }}>☾</button>
  <p className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-center text-[11px] font-semibold tracking-[.3em] text-[#f3dfaa]">TAP TO OPEN</p>
</motion.div>
      </div>
    </motion.div>
  );
}
