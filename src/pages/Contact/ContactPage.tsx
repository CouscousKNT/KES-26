import { useEffect, useState, type FormEvent } from "react";
import { ActionButton } from "./inputs/ActionButton";
import { ContactHeader } from "./sections/ContactHeader";
import { ContactForm } from "./sections/ContactForm";
interface MailProps {
  recipient?: string;
  maxContentLength?: number;
  maxSubjectLength?: number;
  onSend?: (data: { to: string; subject: string; content: string }) => void;
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] as const;
const pad = (n: number): string => String(n).padStart(2, "0");
const formatRetroDate = (date: Date): string =>
  `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${DAYS[date.getDay()]}`;

export default function ContactPage({
  recipient = import.meta.env.VITE_MAIL_RECIPIENT,
  maxContentLength = 400,
  maxSubjectLength = 100,
  onSend,
}: MailProps) {
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [dateStamp, setDateStamp] = useState<string>(
    formatRetroDate(new Date()),
  );

  useEffect(() => {
    setDateStamp(formatRetroDate(new Date()));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedSubject = subject.trim();
    const trimmedContent = content.trim();

    const mailto =
      `mailto:${encodeURIComponent(recipient)}` +
      `?subject=${encodeURIComponent(trimmedSubject)}` +
      `&body=${encodeURIComponent(trimmedContent)}`;

    onSend?.({
      to: recipient,
      subject: trimmedSubject,
      content: trimmedContent,
    });
    window.location.href = mailto;
  };

  const handleReset = (): void => {
    setSubject("");
    setContent("");
  };

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-x-hidden p-2.5 pb-3.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(226, 238, 245, 0.88) 0%, rgba(170,215,255,0.80) 48%, rgba(130,190,248,0.90) 100%)",
        boxShadow: `
                      inset 0 0 0 2px rgba(30,80,160,0.3),
                      inset 0 2px 8px rgba(30,80,160,0.2),
            `,
      }}
    >
      <ContactHeader />
      <main className="relative z-[2] w-full h-full rounded-[42px]">
        <form
          className="h-full flex flex-col relative overflow-hidden "
          onSubmit={handleSubmit}
          noValidate
        >
          {/* FORMULAIRE DE CONTACT (OBJET ET CONTENU DU MAIL) */}
          <ContactForm
            recipient={recipient}
            subject={subject}
            content={content}
            dateStamp={dateStamp}
            maxSubjectLength={maxSubjectLength}
            maxContentLength={maxContentLength}
            onSubjectChange={setSubject}
            onContentChange={setContent}
          />
          {/* BOUTONS ACTIONS */}
          <div className="t-3.5 grid grid-cols-[1.4fr_1fr] gap-2.5 px-1">
            <ActionButton buttonType="send" />
            <ActionButton buttonType="delete" onClick={handleReset} />
          </div>
        </form>
      </main>
    </div>
  );
}
