import { useEffect, useState, type FormEvent } from "react";
import { ActionButton } from "./inputs/ActionButton";
import { ContactHeader } from "./sections/ContactHeader";
import { ContactForm } from "./sections/ContactForm";
interface MailProps {
  /** Adresse email du destinataire (codée en dur par défaut) */
  recipient?: string;
  /** Longueur maximale du corps du mail */
  maxBodyLength?: number;
  /** Longueur maximale de l'objet */
  maxSubjectLength?: number;
  /** Callback déclenché juste avant l'ouverture du client mail */
  onSend?: (data: { to: string; subject: string; body: string }) => void;
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] as const;
const pad = (n: number): string => String(n).padStart(2, "0");
const formatRetroDate = (date: Date): string =>
  `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${DAYS[date.getDay()]}`;

// ============================================================
// Fonts Google (injectées une seule fois)
// ============================================================
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=VT323&family=Orbitron:wght@700;900&family=Quicksand:wght@400;500;600;700&display=swap";

const useGoogleFonts = (): void => {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONTS_HREF}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_HREF;
    document.head.appendChild(link);
  }, []);
};

// ============================================================
// Keyframes & styles non exprimables en Tailwind
// ============================================================
const KEYFRAMES_CSS = `

.riize-textarea::placeholder { color: #8ba3c8; font-style: italic; }
.riize-input::placeholder { color: #8ba3c8; font-style: italic; }

/* Reflet glossy (::before) */
.riize-glossy-nav::before { height: 48%; border-radius: 10px 10px 50% 50% / 10px 10px 95% 95%; background: linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%); }
/* Reflet papier message */
.riize-paper-gloss::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 30%;
  background: linear-gradient(180deg, rgba(180,220,255,0.15) 0%, rgba(180,220,255,0) 100%);
  pointer-events: none;
}

/* Embout batterie */
.riize-battery::after {
  content: '';
  position: absolute;
  right: -4px; top: 5px;
  width: 3px; height: 8px;
  background: #1c4a8a;
  border-radius: 0 2px 2px 0;
}
/* Focus aqua sur les inputs */
.riize-input:focus, .riize-textarea:focus {
  box-shadow:
    inset 0 2px 3px rgba(30,80,160,0.3),
    inset 0 0 0 2px #64d8cb,
    0 0 8px rgba(100, 216, 203, 0.5) !important;
}
`;

// ============================================================
// Composant
// ============================================================
export default function ContactPage({
  recipient = "mrgzima@outlook.fr",
  maxBodyLength = 400,
  maxSubjectLength = 100,
  onSend,
}: MailProps) {
  useGoogleFonts();

  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [dateStamp, setDateStamp] = useState<string>(
    formatRetroDate(new Date()),
  );

  useEffect(() => {
    setDateStamp(formatRetroDate(new Date()));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedSubject = subject.trim();
    const trimmedBody = body.trim();

    const mailto =
      `mailto:${encodeURIComponent(recipient)}` +
      `?subject=${encodeURIComponent(trimmedSubject)}` +
      `&body=${encodeURIComponent(trimmedBody)}`;

    onSend?.({ to: recipient, subject: trimmedSubject, body: trimmedBody });
    window.location.href = mailto;
  };

  const handleReset = (): void => {
    setSubject("");
    setBody("");
  };

  const uiFont = { fontFamily: "'Quicksand', sans-serif" };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-x-hidden"
      style={{ ...uiFont }}
    >
      {/* Styles globaux (keyframes + pseudo-éléments) */}
      <style>{KEYFRAMES_CSS}</style>

      <main className="relative z-[2] w-full h-full rounded-[42px]">
        <form
          className="h-full flex flex-col relative overflow-hidden p-2.5 pb-3.5"
          style={{
            background:
              "linear-gradient(180deg, rgba(226, 238, 245, 0.88) 0%, rgba(170,215,255,0.80) 48%, rgba(130,190,248,0.90) 100%)",
            boxShadow: `
                      inset 0 0 0 2px rgba(30,80,160,0.3),
                      inset 0 2px 8px rgba(30,80,160,0.2),
            `,
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <ContactHeader />
          <ContactForm
            recipient={recipient}
            subject={subject}
            body={body}
            dateStamp={dateStamp}
            maxSubjectLength={maxSubjectLength}
            maxBodyLength={maxBodyLength}
            onSubjectChange={setSubject}
            onBodyChange={setBody}
          />
          {/* BOUTONS ACTIONS */}
          <div className="riize-anim-5 mt-3.5 grid grid-cols-[1.4fr_1fr] gap-2.5 px-1">
            <ActionButton buttonType="send" />
            <ActionButton buttonType="delete" onClick={handleReset} />
          </div>
        </form>
      </main>
    </div>
  );
}
