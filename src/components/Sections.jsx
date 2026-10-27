import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { buildWhatsAppMessageLink, buildEmailLink } from "./inviteLink";

const R = ({ children, className = "", d = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: d }} className={className}>{children}</motion.div>
);
const Head = ({ label, title, dark }) => (
  <R className="mb-10 flex flex-col items-center gap-2 text-center">
    <span className={`text-[11px] font-semibold tracking-[.4em] ${dark ? "text-[#d4af6a]" : "text-[#14594a]"}`}>{label}</span>
    <h2 className={`font-display text-3xl ${dark ? "text-[#fff8e6]" : "text-[#0c2b25]"}`}>{title}</h2>
    <span className="text-[#d4af6a]">✦</span>
  </R>
);
const Sec = ({ dark, children }) => (
  <section className={`px-6 py-20 ${dark ? "bg-[#0c2b25] text-[#f6efe0]" : "bg-[#f6efe0] text-[#10211d]"}`}>{children}</section>
);
const Row = ({ k, v }) => (<div className="flex flex-col items-center"><span className="text-[10px] tracking-[.3em] text-[#d4af6a]">{k}</span><span className="font-serif text-lg">{v}</span></div>);

export function Invite() {
  const { data, t } = useLanguage();
  return (<Sec><Head label={t.invitation} title={data.invitation.heading} /><R className="mx-auto max-w-md text-center font-serif text-xl leading-relaxed opacity-80">{data.invitation.message}</R></Sec>);
}

const STAR = (() => { const p = []; for (let i = 0; i < 16; i++) { const a = (Math.PI * i) / 8 - Math.PI / 2, r = i % 2 ? 38 : 50; p.push(`${(50 + r * Math.cos(a)).toFixed(1)}% ${(50 + r * Math.sin(a)).toFixed(1)}%`); } return `polygon(${p.join(",")})`; })();
const S = 300;

export function Scratch() {
  const { data, t } = useLanguage();
  const cv = useRef(null);
  const [done, setDone] = useState(false);
  const [hint, setHint] = useState(true);
  useEffect(() => {
    const c = cv.current; if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = c.height = S * dpr;
    const x = c.getContext("2d"); x.scale(dpr, dpr);
    const g = x.createLinearGradient(0, 0, S, S);
    g.addColorStop(0, "#f6dfa0"); g.addColorStop(0.5, "#b98a3e"); g.addColorStop(1, "#7a5a22");
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 240; i++) { x.fillStyle = `rgba(255,255,255,${Math.random() * 0.5})`; x.fillRect(Math.random() * S, Math.random() * S, 1.5, 1.5); }
    let down = false;
    const pos = (e) => { const r = c.getBoundingClientRect(), p = e.touches ? e.touches[0] : e; return [p.clientX - r.left, p.clientY - r.top]; };
    const dig = (e) => { const [px, py] = pos(e); x.globalCompositeOperation = "destination-out"; x.beginPath(); x.arc(px, py, 22, 0, 7); x.fill(); };
    const check = () => { const d = x.getImageData(0, 0, c.width, c.height).data; let n = 0, m = 0; for (let i = 3; i < d.length; i += 24) { m++; if (d[i] < 40) n++; } if (n / m > 0.25) setDone(true); };
    const st = (e) => { down = true; setHint(false); document.documentElement.style.overflow = "hidden"; dig(e); };
    const mv = (e) => { if (!down) return; e.cancelable && e.preventDefault(); dig(e); check(); };
    const en = () => { down = false; document.documentElement.style.overflow = ""; check(); };
    c.addEventListener("mousedown", st); c.addEventListener("mousemove", mv); window.addEventListener("mouseup", en);
    c.addEventListener("touchstart", st, { passive: false }); c.addEventListener("touchmove", mv, { passive: false }); c.addEventListener("touchend", en);
    return () => { window.removeEventListener("mouseup", en); document.documentElement.style.overflow = ""; };
  }, []);
  return (
    <Sec dark>
      <Head dark label={t.secretLabel} title={t.secretHeading} />
      <p className="mb-6 text-center font-script text-4xl text-[#d4af6a]">{t.scratchTitle}</p>
      <div dir="ltr" className="relative mx-auto select-none" style={{ width: S, height: S, touchAction: "none" }}>
        <div className="absolute inset-0 grid place-items-center text-center" style={{ clipPath: STAR, background: "radial-gradient(circle,#1b7a63,#0b3329)", boxShadow: "0 0 50px #d4af6a" }}>
          <AnimatePresence>{done && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="px-12">
              <p className="text-[10px] tracking-[.3em] text-[#f3dfaa]">{t.saveTheDate}</p>
              <p className="font-display text-xl text-white">{data.weddingDateDisplay}</p>
              <p className="font-script text-2xl text-[#f3dfaa]">{t.ourWeddingDay}</p>
            </motion.div>)}</AnimatePresence>
        </div>
        {!done && <canvas ref={cv} className="absolute inset-0 cursor-pointer" style={{ width: S, height: S, clipPath: STAR }} />}
        {!done && hint && <span className="pointer-events-none absolute inset-0 grid place-items-center text-[12px] font-semibold tracking-[.2em] text-[#3a2808]/80">{t.scratchOverlay}</span>}
      </div>
    </Sec>
  );
}

export function Count() {
  const { data, t } = useLanguage();
  const calc = () => { const d = Math.max(new Date(data.weddingDateISO) - Date.now(), 0); return [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60]; };
  const [v, setV] = useState(calc);
  useEffect(() => { const i = setInterval(() => setV(calc()), 1000); return () => clearInterval(i); }, []);
  const L = [t.days, t.hours, t.minutes, t.seconds];
  return (
    <Sec><Head label={t.countdownLabel} title={t.countdownHeading} />
      <div dir="ltr" className="flex justify-center gap-2.5">{v.map((n, i) => (
        <div key={i} className="flex h-28 w-[72px] flex-col items-center justify-end rounded-t-full border border-[#d4af6a] bg-[#0c2b25] pb-3 text-[#fff8e6]">
          <b className="font-display text-2xl">{String(n).padStart(2, "0")}</b><i className="text-[10px] not-italic text-[#d4af6a]">{L[i]}</i>
        </div>))}</div>
    </Sec>
  );
}

export function Schedule() {
  const { data, t } = useLanguage();
  return (
    <Sec dark><Head dark label={t.scheduleLabel} title={t.scheduleHeading} />
      <div className="mx-auto flex max-w-sm flex-col gap-5 border-s border-[#d4af6a]/50 ps-6">{data.timeline.map((e, i) => (
        <R key={e.key} d={i * 0.05} className="relative rounded-xl border border-[#d4af6a]/30 bg-white/5 p-4">
          <span className="absolute -start-[34px] top-5 text-[#d4af6a]">☾</span>
          <p className="font-display text-xl text-[#fff8e6]">{e.title}</p>
          <p className="font-serif opacity-80">{e.date} · {e.time}</p>
          <p className="font-serif text-sm opacity-60">{e.venue}</p>
        </R>))}</div>
    </Sec>
  );
}

export function Nikah() {
  const { data, t } = useLanguage();
  const n = data.nikah;
  return (
    <Sec><Head label={t.nikahLabel} title={t.nikahHeading} />
      <R className="mx-auto flex max-w-xs flex-col items-center gap-3 rounded-t-[999px] border border-[#14594a]/40 px-8 pb-10 pt-16 text-center">
        <Row k={t.date} v={n.date} /><Row k={t.time} v={n.time} /><Row k={t.venue} v={n.venue} />
        <p className="mt-2 font-serif italic opacity-70">{n.note}</p>
      </R>
    </Sec>
  );
}

export function Pre() {
  const { data, t } = useLanguage();
  return (
    <Sec dark><Head dark label={t.preLabel} title={t.preHeading} />
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">{data.preWedding.map((e, i) => (
        <R key={e.key} d={i * 0.1} className="rounded-t-[999px] rounded-b-2xl border border-[#d4af6a]/40 bg-white/5 px-5 pb-6 pt-14 text-center">
          <p className="font-display text-xl text-[#fff8e6]">{e.title}</p>
          <p className="font-serif text-sm opacity-80">{e.date} · {e.time}</p>
          <p className="font-serif text-sm opacity-60">{e.venue}</p>
          <p className="mt-2 font-serif text-sm italic opacity-60">{e.description}</p>
        </R>))}</div>
    </Sec>
  );
}

export function Venue() {
  const { data, t } = useLanguage();
  const v = data.venue;
  return (
    <Sec><Head label={t.venueLabel} title={t.venueHeading} />
      <R className="mx-auto flex max-w-sm flex-col items-center gap-2 text-center">
        <p className="font-display text-2xl">{v.name}</p><p className="font-serif opacity-70">{v.address}</p>
        <p className="font-serif opacity-70">{v.date} · {v.time}</p>
        <a href={v.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-full bg-[#0c2b25] px-7 py-3 text-xs font-semibold tracking-[.2em] text-[#d4af6a] active:scale-95">{t.getDirections}</a>
      </R>
    </Sec>
  );
}

export function Guest() {
  const { t } = useLanguage();
  const [f, setF] = useState({ name: "", message: "", att: "yes" });
  const [sent, setSent] = useState(false);
  const pay = () => ({ name: f.name, message: f.message, attendance: f.att === "yes" ? "Yes" : "No" });
  const submit = (e) => { e.preventDefault(); window.open(buildWhatsAppMessageLink(pay()), "_blank", "noopener,noreferrer"); setSent(true); };
  const inp = "w-full rounded-lg border border-[#d4af6a]/40 bg-[#0c2b25]/60 px-4 py-2.5 font-serif text-base text-[#fff8e6] outline-none focus:border-[#d4af6a]";
  return (
    <Sec dark><Head dark label={t.guestLabel} title={t.guestHeading} />
      <div className="mx-auto max-w-sm rounded-2xl border border-[#d4af6a]/40 bg-white/5 p-6">
        {sent ? (
          <div className="py-8 text-center"><p className="text-3xl">❤️</p><p className="font-display text-xl text-[#fff8e6]">{t.sentTitle}</p><p className="font-serif opacity-70">{t.sentSub}</p></div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <label className="text-[11px] tracking-[.15em] text-[#d4af6a]">{t.yourName}<input required className={inp + " mt-1"} placeholder={t.namePh} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
            <label className="text-[11px] tracking-[.15em] text-[#d4af6a]">{t.yourMessage}<textarea required rows={3} className={inp + " mt-1 resize-none"} placeholder={t.messagePh} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
            <div><p className="mb-1 text-[11px] tracking-[.15em] text-[#d4af6a]">{t.willJoin}</p>
              <div className="flex gap-2">{[["yes", t.yes], ["no", t.no]].map(([k, l]) => (
                <button type="button" key={k} onClick={() => setF({ ...f, att: k })} className={`flex-1 rounded-lg border px-2 py-2 text-xs ${f.att === k ? "border-[#d4af6a] bg-[#d4af6a] text-[#0c2b25]" : "border-[#d4af6a]/40"}`}>{l}</button>))}</div></div>
            <button className="rounded-full bg-[#d4af6a] py-3 text-xs font-semibold tracking-[.2em] text-[#0c2b25] active:scale-95">{t.send}</button>
            <button type="button" onClick={() => { window.location.href = buildEmailLink(pay()); setSent(true); }} className="text-[11px] text-[#d4af6a] underline">{t.viaEmail}</button>
          </form>)}
      </div>
    </Sec>
  );
}

export function Final() {
  const { data } = useLanguage();
  return (
    <Sec><R className="mx-auto max-w-md text-center"><h2 className="font-display text-3xl text-[#0c2b25]">{data.finalMessage.heading}</h2>
      <p className="mt-5 font-serif text-xl leading-relaxed opacity-80">{data.finalMessage.text}</p>
      <p className="mt-6 font-script text-4xl text-[#14594a]">{data.groomName} ♡ {data.brideFamily}</p></R></Sec>
  );
}

export function Foot() {
  const { data, t } = useLanguage();
  const c = data.credit;
  return (
    <footer className="bg-[#071a16] px-6 py-14 text-center text-[#f3dfaa]">
      <p className="text-[11px] tracking-[.35em]">{t.withLove}</p>
      <p className="mt-1 font-serif text-sm italic opacity-70">{data.brideFamily}</p>
      <p className="mt-4 font-script text-3xl text-[#d4af6a]">{data.brideName} ♡ {data.groomName}</p>
      <p className="font-display text-lg">{data.weddingDateDisplay}</p>
      <p className="mt-4 font-serif text-xs opacity-60">{t.thanks}</p>
      {/* {c?.enabled && (<div className="mt-8 flex flex-col items-center gap-3">
        <a href={c.portfolioUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-[#d4af6a]/40 px-6 py-3"><span className="block text-[9px] tracking-[.3em] opacity-60">DESIGNED &amp; DEVELOPED BY</span><span className="font-display text-xl text-[#d4af6a]">{c.name} ↗</span></a>
        <a href={c.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#d4af6a] px-4 py-1.5 text-[10px] font-semibold tracking-[.18em] text-[#0c2b25]">CHAT ON WHATSAPP</a></div>)} */}
    </footer>
  );
}
