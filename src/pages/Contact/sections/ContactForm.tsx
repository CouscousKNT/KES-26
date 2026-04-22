interface ContactFormProps {
  recipient: string;
  subject: string;
  body: string;
  dateStamp: string;
  maxSubjectLength: number;
  maxBodyLength: number;
  onSubjectChange: (value: string) => void;
  onBodyChange: (value: string) => void;
}

const pixelFont = { fontFamily: "'VT323', 'Courier New', monospace" };
const displayFont = { fontFamily: "'Orbitron', sans-serif" };

const CONTACT_FORM_STYLE = ` 
/* Enveloppe icône */
.riize-envelope::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, transparent 45%, rgba(30,80,160,0.6) 46%, rgba(30,80,160,0.6) 47%, transparent 48%),
    linear-gradient(225deg, transparent 45%, rgba(30,80,160,0.6) 46%, rgba(30,80,160,0.6) 47%, transparent 48%);
}`;

export function ContactForm({
  recipient,
  subject,
  body,
  dateStamp,
  maxSubjectLength,
  maxBodyLength,
  onSubjectChange,
  onBodyChange,
}: ContactFormProps) {
  return (
    <>
      <style>{CONTACT_FORM_STYLE}</style>
      {/* Breadcrumb */}
      <nav
        className="flex items-center gap-2 px-1 pb-3 pt-2 text-[17px]"
        style={{ ...pixelFont, color: "#223b6b" }}
        aria-label="Fil d'ariane"
      >
        <div
          className="riize-envelope relative h-6 w-8 flex-shrink-0 rounded-[3px] border-[1.5px]"
          style={{
            borderColor: "#1c4a8a",
            background: "linear-gradient(180deg, #ffffff 0%, #c8dff5 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(30,80,160,0.25)",
          }}
          aria-hidden="true"
        />
        <span>MESSAGE</span>
        <span>&gt;</span>
        <span>Ousmane</span>
      </nav>

      {/* DESTINATAIRE */}
      <input type="hidden" name="recipient" value={recipient} readOnly />

      {/* OBJET DU MAIL */}
      <div
        className="mx-1 mb-3 mt-1 flex items-center gap-2 rounded-[10px] p-1.5"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgb(42, 247, 247) 0%,
              rgba(191, 225, 254, 1) 35%,
              rgba(93, 179, 243, 1) 70%,
              rgb(128, 194, 245) 90%,
              rgb(185, 222, 250) 100%
            )`,
        }}
      >
        <label
          className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-base"
          style={{
            ...pixelFont,
            background:
              "linear-gradient(180deg, #a3e0f8 0%, #a8c8e8 50%, #d6e6fa 100%)",
            boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.9),
              inset 0 -1px 1px rgba(30,80,160,0.25),
              0 1px 2px rgba(30,80,160,0.25)
            `,
            color: "#1c4a8a",
          }}
        >
          <span
            style={{
              color: "#3d8020",
              fontWeight: "bold",
              filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.8))",
            }}
            aria-hidden="true"
          >
            &gt;
          </span>
          <div className="w-full h-full relative ">
            {/* REFLET HAUT TITRE */}
            <div
              style={{
                width: "55px",
                height: "12px",
                opacity: 1,
                position: "absolute",
                right: "-5px",
                top: "-3px",
                borderRadius: "7px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
              }}
            ></div>
            <span className="">Objet</span>
          </div>
        </label>
        <input
          name="subject"
          type="text"
          placeholder="Sujet du message..."
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          maxLength={maxSubjectLength}
          required
          className="riize-input w-full min-w-0 flex-1 rounded-md border-none px-3.5 py-2.5 text-[15px] italic tracking-[1px] text-center outline-none"
          style={{
            ...displayFont,
            background: "linear-gradient(180deg, #ffffff 0%, #f0f6ff 100%)",
            boxShadow: `
            inset 0 2px 3px rgba(30,80,160,0.25),
            inset 0 -1px 0 rgba(255,255,255,0.9),
            0 1px 0 rgba(255,255,255,0.5)
          `,
            fontWeight: 900,
            color: "#1c4a8a",
          }}
        />
      </div>

      {/* CORPS DU MESSAGE */}
      <div
        className="mx-1 flex flex-1 flex-col min-h-0 rounded-xl p-2"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgb(42, 247, 247) 0%,
              rgba(191, 225, 254, 1) 20%,
              rgba(93, 179, 243, 1) 51%,
              rgb(128, 194, 245) 98%,
              rgb(163, 211, 248) 100%
            )`,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.8),
            inset 0 -1px 2px rgba(30,80,160,0.3),
            0 3px 6px rgba(30,80,160,0.25)
          `,
        }}
      >
        <div
          className="riize-paper-gloss relative flex flex-1 flex-col overflow-hidden rounded-lg px-3.5 pb-9 pt-4"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #fafdff 100%)",
            boxShadow:
              "inset 0 2px 4px rgba(30,80,160,0.2), inset 0 0 0 1px rgba(30,80,160,0.15)",
          }}
        >
          <textarea
            id="riize-body"
            name="body"
            placeholder="Travaillons ensemble ! Écris ton message ici ~{><}..."
            value={body}
            onChange={(e) => onBodyChange(e.target.value)}
            maxLength={maxBodyLength}
            required
            className="riize-textarea relative z-[2] flex-1 min-h-0 block w-full resize-none border-none bg-transparent text-[19px] leading-[1.6] outline-none"
            style={{ ...pixelFont, color: "#2a4570" }}
          />
          <div
            className="pointer-events-none absolute bottom-2.5 left-3.5 right-3.5 z-[3] flex justify-between text-base opacity-85"
            style={{ ...pixelFont, color: "#1c4a8a" }}
          >
            <span>{dateStamp}</span>
            <span>
              <span>{body.length}</span> / {maxBodyLength}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
