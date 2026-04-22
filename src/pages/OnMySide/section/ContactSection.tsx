import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";
import FrutigerAeroButton, {
  type Color,
} from "../components/inputs/FrutigerAeroButton";

interface ContactsButtonProps {
  label: string;
  color: Color;
  href: string;
}

const contacts: ContactsButtonProps[] = [
  {
    label: "🔗 LinkedIn",
    color: "green",
    href: "https://www.linkedin.com/in/ousmane-kanoute-3453b620a/",
  },
  {
    label: "📸 Instagram",
    color: "purple",
    href: "https://www.instagram.com/ousmane.knt/?__pwa=1",
  },
  { label: "💻 GitHub", color: "blue", href: "https://github.com/CouscousKNT" },
];

export default function ContactSection() {
  return (
    <GlassCard>
      <SectionHeader title="Contact & Réseaux" />
      <div className="flex gap-2 p-3 flex-wrap">
        {contacts.map((c, i) => (
          <FrutigerAeroButton
            key={i}
            color={c.color}
            size={"small"}
            href={c.href}
          >
            {c.label}
          </FrutigerAeroButton>
        ))}
      </div>
    </GlassCard>
  );
}
