// ========= SAB KUCH YAHIN SE BADLO (English + Urdu) =========
const weddingData = {
  brideName: "Meharma Khan",
  groomName: "Sayyed Saud",
 groomFamily: "Groom's Family",     
  hero: {
    eyebrow: "We are honored to welcome you to the wedding ceremony of",
    brideDetails: ["Daughter of Mr.Habib Khan  "],
    groomDetails: ["Son of Mr.Sayyed Javed "],
  },
weddingDateISO: "2026-12-28T17:00:00",
weddingDateDisplay: "28 DECEMBER 2026",
  heroTagline: "A beautiful beginning, written by Allah.",
  invitation: {
    heading: "With Joy in Our Hearts",
    message: "With the blessings of Allah and the love of our families, we warmly invite you to join us as we celebrate the beginning of a beautiful new chapter.",
  },
  video: { mp4: "/wedding-bg.mp4", poster: "/wedding-poster.jpg" },
  music: { src: "/wedding-song.mp3", volume: 0.5 },
  timeline: [
    { key: "Haldi", title: "Mayun / Ubtan", date: "27 December 2026", time: "6:00 PM onwards", venue: "Family Residence, Burhanpur" },
    { key: "nikah", title: "Nikah", date: "28 December 2026", time: "5:00 PM", venue: "Jama Masjid, Old Delhi" },
    { key: "Walima", title: "Walima", date: "29 December 2026", time: "7:00 PM onwards", venue: "La Fortuna Banquet Hall, Mayapuri, Delhi" },
  ],
  nikah: { date: "2 January 2027", time: "5:00 PM", venue: "Jama Masjid, Old Delhi, Delhi", note: "With the blessings of Allah, we begin a new chapter together, bound in faith, love and family." },
  preWedding: [
    { key: "mehndi", title: "Mehndi", date: "26 Dec 2026", time: "6:00 PM", venue: "Family Residence", description: "An evening of colour, henna and joyful traditions." },
    { key: "mayun", title: "Mayun / Ubtan", date: "27 Dec 2026", time: "6:00 PM", venue: "Family Residence", description: "A gentle, intimate ritual surrounded by loved ones." },
    { key: "gathering", title: "Family Gathering", date: "27 Dec 2026", time: "7:00 PM", venue: "La Fortuna Banquet Hall ", description: "A warm evening bringing both families together." },
  ],
  venue: { name: "La Fortuna Banquet Hall", address: "C-146, Mayapuri Road, Mayapuri Industrial Area Phase II, Delhi 110064", date: "29 December 2026", time: "7:00 PM", mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Fortuna+Banquet+Hall+Mayapuri+Delhi" },
  defaultContact: { name: "Wedding Coordinator", whatsapp: "919301197150" }, // bina link wale guests ka message yahan jayega
  contact: { email: "saud@gmail.com" },
  finalMessage: { heading: "Your Presence Is Our Greatest Gift", text: "Your love, prayers and presence will make our celebration even more special. We cannot wait to celebrate this beautiful beginning with you." },
  // credit: { enabled: true, name: "Mehran Malik", portfolioUrl: "https://mehran-malik-portfolio.vercel.app", whatsappUrl: "https://wa.me/919301197150?text=Hi%20Mehran!" },

  // // ============ URDU ============
   ur: {
    brideName: "ڈاکٹر تنزیمہ خانم",
    groomName: "ارسلان شیخ",
    groomFamily: "دولہا کے اہلِ خانہ",   
    hero: { eyebrow: "ہمیں آپ کو ان کی شادی کی تقریب میں خوش آمدید کہنے کا اعزاز حاصل ہے", brideDetails: ["صاحبزادی جناب وقار شیخ ایڈووکیٹ"], groomDetails: ["صاحبزادہ جناب متین اجمل شیخ"] },
   weddingDateDisplay: "28 دسمبر 2026",
    heroTagline: "ایک خوبصورت آغاز، جو اللہ نے لکھا۔",
    invitation: { heading: "خوشی بھرے دل کے ساتھ", message: "اللہ کی رحمت اور اپنے گھر والوں کی محبت کے ساتھ، ہم آپ کو اپنی زندگی کے اس خوبصورت نئے سفر کے آغاز پر خوش دلی سے مدعو کرتے ہیں۔" },
   timeline: [
  { key: "Haldi", title: "Mayun / Ubtan", date: "1 January 2027", time: "6:00 PM onwards", venue: "Family Residence" },
  { key: "nikah", title: "Nikah", date: "2 January 2027", time: "5:00 PM", venue: "Jama Masjid, Burhanpur" },
  { key: "walima", title: "Walima", date: "3 January 2027", time: "8:00 PM onwards", venue: "Venue ka naam" },
],
    nikah: { date: "2 جنوری 2027", time: "شام 5:00 بجے", venue: "جامع مسجد، برہان پور، مدھیہ پردیش", note: "اللہ کی رحمت سے، ہم ایک نئے سفر کا آغاز کرتے ہیں، ایمان، محبت اور خاندان کے ساتھ بندھے ہوئے۔" },
    preWedding: [
      { key: "mehndi", title: "مہندی", date: "31 دسمبر 2026", time: "شام 6:00 بجے", venue: "رہائش گاہِ خاندان", description: "رنگوں، مہندی اور خوشیوں بھری روایات کی ایک شام۔" },
      { key: "mayun", title: "مایوں / اُبٹن", date: "1 جنوری 2027", time: "شام 6:00 بجے", venue: "رہائش گاہِ خاندان", description: "اپنوں کے درمیان ایک سادہ اور پیاری سی رسم۔" },
      { key: "gathering", title: "خاندانی اجتماع", date: "1 جنوری 2027", time: "شام 7:00 بجے", venue: "صدیقی جماعت خانہ", description: "ایک گرمجوش شام جو دونوں خاندانوں کو ایک ساتھ لاتی ہے۔" },
    ],
    venue: { name: "حسین میرج ہال", address: "انڈسٹریل ایریا، برہان پور، مدھیہ پردیش 450331", date: "2 جنوری 2027", time: "شام 7:00 بجے" },
    finalMessage: { heading: "آپ کی موجودگی ہمارے لیے سب سے بڑا تحفہ ہے", text: "آپ کی محبت، دعائیں اور موجودگی ہماری تقریب کو اور بھی خاص بنا دیں گی۔ ہم آپ کے ساتھ اس خوبصورت آغاز کو منانے کے منتظر ہیں۔" },
  },

  // ============ BUTTONS / HEADINGS ============
  ui: {
    en: {
      date: "DATE", time: "TIME", venue: "VENUE", invitation: "THE INVITATION",
      secretLabel: "A LITTLE SECRET", secretHeading: "A Little Secret Awaits", scratchTitle: "Scratch to Reveal", scratchOverlay: "SCRATCH TO REVEAL", saveTheDate: "SAVE THE DATE", ourWeddingDay: "Our Wedding Day",
      countdownLabel: "THE COUNTDOWN", countdownHeading: "Counting Down To Our Big Day", days: "DAYS", hours: "HOURS", minutes: "MINUTES", seconds: "SECONDS",
      scheduleLabel: "THE SCHEDULE", scheduleHeading: "The Celebrations", nikahLabel: "THE UNION", nikahHeading: "The Nikah", preLabel: "LEADING UP", preHeading: "Before The Big Day",
      venueLabel: "THE VENUE", venueHeading: "Where We Celebrate", getDirections: "GET DIRECTIONS",
      guestLabel: "THE GUESTBOOK", guestHeading: "Leave Your Blessings", yourName: "YOUR NAME", namePh: "e.g. Sara Khan", yourMessage: "YOUR MESSAGE", messagePh: "Share your blessings for the couple...",
      willJoin: "WILL YOU JOIN US?", yes: "Yes, with pleasure", no: "Sorry, I can't attend", send: "SEND YOUR BLESSINGS", viaEmail: "or send via email instead",
      sentTitle: "Your blessings have been sent", sentSub: "Thank you for being part of our story.", withLove: "WITH LOVE & BLESSINGS", thanks: "Thank you for being a part of our special day.",
    },
    ur: {
      date: "تاریخ", time: "وقت", venue: "مقام", invitation: "دعوت نامہ",
      secretLabel: "ایک چھوٹا سا راز", secretHeading: "ایک چھوٹا سا راز آپ کا منتظر ہے", scratchTitle: "کھرچ کر دیکھیں", scratchOverlay: "یہاں کھرچیں", saveTheDate: "تاریخ یاد رکھیں", ourWeddingDay: "ہماری شادی کا دن",
      countdownLabel: "الٹی گنتی", countdownHeading: "ہمارے بڑے دن میں باقی وقت", days: "دن", hours: "گھنٹے", minutes: "منٹ", seconds: "سیکنڈ",
      scheduleLabel: "پروگرام", scheduleHeading: "تقریبات", nikahLabel: "رشتۂ ازدواج", nikahHeading: "نکاح", preLabel: "شادی سے پہلے", preHeading: "بڑے دن سے پہلے",
      venueLabel: "مقام", venueHeading: "ہماری تقریب کہاں ہوگی", getDirections: "راستہ دیکھیں",
      guestLabel: "مہمانوں کی کتاب", guestHeading: "اپنی دعائیں لکھیں", yourName: "آپ کا نام", namePh: "مثلاً سارہ خان", yourMessage: "آپ کا پیغام", messagePh: "جوڑے کے لیے اپنی دعائیں لکھیں...",
      willJoin: "کیا آپ تشریف لائیں گے؟", yes: "جی ہاں، ضرور", no: "معذرت، نہیں آ سکوں گا", send: "دعائیں بھیجیں", viaEmail: "یا ای میل کے ذریعے بھیجیں",
      sentTitle: "آپ کی دعائیں پہنچ گئیں", sentSub: "ہماری خوشیوں میں شریک ہونے کا شکریہ۔", withLove: "محبتوں اور دعاؤں کے ساتھ", thanks: "ہماری خوشیوں میں شریک ہونے کا شکریہ۔",
    },
  },
};
export default weddingData;
