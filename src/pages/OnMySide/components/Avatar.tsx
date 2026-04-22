export default function Avatar({
  initials,
  profilePicture,
  size = 38,
  radius = 5,
  online = false,
}: {
  initials: string;
  profilePicture?: string;
  size?: number;
  radius?: number;
  online?: boolean;
}) {
  const css = `  
  .fa-mini-avatar {
    background: linear-gradient(135deg, #0a3080, #1a78e0);
    box-shadow: 0 1px 5px rgba(0,60,180,0.22);
  }
  
  .fa-online {
  background: radial-gradient(circle at 33% 28%, #a0ff70 0%, #28b808 100%);
  box-shadow: 0 0 5px rgba(50,200,30,0.65);
  }
  `;

  return (
    <>
      <style>{css}</style>
      <div
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <div
          className="fa-avatar fa-mini-avatar flex items-center justify-center font-bold text-[rgba(160,225,255,0.95)] border-3 border-white/85 overflow-hidden"
          style={{
            width: size,
            height: size,
            borderRadius: radius,
            fontSize: size * 0.34,
            letterSpacing: "-0.5px",
          }}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              alt={initials}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            initials
          )}
        </div>
        {online && (
          <div className="fa-online absolute -bottom-[2px] -right-[2px] w-[11px] h-[11px] rounded-full border-2 border-white/90" />
        )}
      </div>
    </>
  );
}
