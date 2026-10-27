import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Hero({ started, revealed }) {
  const { data, isUr } = useLanguage();
  const [failed, setFailed] = useState(false);
  const up = (i) => ({ initial: { opacity: 0, y: 40, filter: "blur(8px)" }, animate: revealed ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}, transition: { duration: 1, delay: 0.3 + i * 0.3, ease: [0.22, 1, 0.36, 1] } });
  const { hero, brideName, groomName } = data;

  // Urdu me size chhota + line-height theek, English jaisa tha waisa
  const eb = isUr ? "max-w-[270px] text-sm leading-[2]" : "max-w-[230px] text-[15px] italic leading-snug";
  const nm = isUr ? "text-3xl leading-[1.9]" : "text-4xl";
  const dt = isUr ? "text-base leading-[2]" : "text-xl";
  const tg = isUr ? "text-base leading-[2]" : "text-lg italic";

  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-[#071a16] py-6">
      {started && !failed && (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={data.video.poster} onError={() => setFailed(true)}>
          <source src={data.video.mp4} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071a16]/80 via-[#0c2b25]/55 to-[#071a16]/90" />

      <div className="relative z-10 flex min-h-[80svh] w-[min(88vw,380px)] flex-col items-center justify-center gap-2 rounded-t-[999px] border border-[#d4af6a]/60 bg-black/25 px-6 pb-10 pt-16 text-center backdrop-blur-[2px]">
        <motion.p {...up(0)} className={`font-serif text-[#f3dfaa] ${eb}`}>{hero.eyebrow}</motion.p>

        <motion.p {...up(1)} className={`mt-3 font-display text-[#fff8e6] ${nm}`}>{groomName}</motion.p>
        <motion.div {...up(1.5)} className={`font-serif text-[#f3dfaa]/80 ${dt}`}>{hero.groomDetails.map((l) => <p key={l}>{l}</p>)}</motion.div>

        <motion.p {...up(2)} className="font-script text-4xl text-[#d4af6a]">&amp;</motion.p>

        <motion.p {...up(2.5)} className={`font-display text-[#fff8e6] ${nm}`}>{brideName}</motion.p>
        <motion.div {...up(3)} className={`font-serif text-[#f3dfaa]/80 ${dt}`}>{hero.brideDetails.map((l) => <p key={l}>{l}</p>)}</motion.div>

        <motion.p {...up(3.6)} className={`mt-4 font-serif text-[#f3dfaa]/90 ${tg}`}>{data.heroTagline}</motion.p>
      </div>
    </section>
  );

}
