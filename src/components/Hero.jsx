import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ started, revealed }) {
  const { data } = useLanguage();
  const [failed, setFailed] = useState(false);
  const up = (i) => ({ initial: { opacity: 0, y: 40, filter: "blur(8px)" }, animate: revealed ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}, transition: { duration: 1, delay: 0.3 + i * 0.3, ease: [0.22, 1, 0.36, 1] } });
  const { hero, brideName, groomName } = data;
  return (
    <section className="relative grid h-[100svh] place-items-center overflow-hidden bg-[#071a16]">
      {started && !failed && (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={data.video.poster} onError={() => setFailed(true)}>
          <source src={data.video.mp4} type="video/mp4" />
        </video>
      )}
           <div className="absolute inset-0 bg-gradient-to-b from-[#071a16]/80 via-[#0c2b25]/55 to-[#071a16]/90" />
      <div className="relative z-10 flex h-[80svh] w-[min(88vw,380px)] flex-col items-center justify-center gap-2 rounded-t-[999px] border border-[#d4af6a]/60 bg-black/25 px-6 pt-10 text-center backdrop-blur-[2px]">
        <motion.p {...up(0)} className="max-w-[230px] font-serif text-[15px] italic leading-snug text-[#f3dfaa]">{hero.eyebrow}</motion.p>

        <motion.p {...up(1)} className="mt-3 font-display text-4xl text-[#fff8e6]">{groomName}</motion.p>
        <motion.div {...up(1.5)} className="font-serif text-xl text-[#f3dfaa]/80">{hero.groomDetails.map((l) => <p key={l}>{l}</p>)}</motion.div>

        <motion.p {...up(2)} className="font-script text-4xl text-[#d4af6a]">&amp;</motion.p>

        <motion.p {...up(2.5)} className="font-display text-4xl text-[#fff8e6]">{brideName}</motion.p>
        <motion.div {...up(3)} className="font-serif text-xl text-[#f3dfaa]/80">{hero.brideDetails.map((l) => <p key={l}>{l}</p>)}</motion.div>

        <motion.p {...up(3.6)} className="mt-4 font-serif text-lg italic text-[#f3dfaa]/90">{data.heroTagline}</motion.p>
      </div>
    </section>
  );
}
