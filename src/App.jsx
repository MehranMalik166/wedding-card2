import { useEffect, useRef, useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import weddingData from "./data/weddingData";
import LanguageToggle from "./components/LanguageToggle";
import MusicButton from "./components/MusicButton";
import InviteLinkGenerator from "./components/InviteLinkGenerator";
import Gate from "./components/Gate";
import Hero from "./components/Hero";
import { Invite, Scratch, Count, Schedule, Nikah, Pre, Venue, Guest, Final, Foot } from "./components/Sections";

function Inner() {
  const { isUr } = useLanguage();
  const [gate, setGate] = useState(true);
  const [video, setVideo] = useState(false);
  const [names, setNames] = useState(false);
  const [music, setMusic] = useState(false);
  const audio = useRef(null);
  const family = new URLSearchParams(window.location.search).get("family") === "true";

  useEffect(() => {
    const b = document.body.style;
    if (gate) { b.position = "fixed"; b.width = "100%"; b.top = "0"; }
    else { b.position = ""; b.width = ""; b.top = ""; }
  }, [gate]);

  const play = () => { const a = audio.current; if (!a) return; a.volume = weddingData.music?.volume ?? 0.5; a.play().then(() => setMusic(true)).catch(() => {}); };
  const toggle = () => { const a = audio.current; if (!a) return; if (a.paused) play(); else { a.pause(); setMusic(false); } };

  return (
    <div dir={isUr ? "rtl" : "ltr"} className="min-h-screen bg-[#f6efe0]">
      {!gate && <LanguageToggle />}
      {!gate && <MusicButton playing={music} onToggle={toggle} />}
      <audio ref={audio} src={weddingData.music?.src} loop preload="none" />
      <Hero started={video} revealed={names} />
      {gate && <Gate onTap={() => { setVideo(true); play(); }} onOpened={() => { setGate(false); setNames(true); }} />}
      <Invite /><Scratch /><Count /><Schedule /><Nikah /><Pre /><Venue /><Guest /><Final />
      {family && <InviteLinkGenerator />}
      <Foot />
    </div>
  );
}

export default function App() {
  return (<LanguageProvider><Inner /></LanguageProvider>);
}
