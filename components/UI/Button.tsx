export default function Button({
  children,
  onClick,
  mode,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  mode?: "light" | "dark";
}) {
  return (
    <button
      className={`mt-2 px-6 py-2 rounded ${mode === "dark" ? "bg-primary text-background" : "bg-secondary text-foreground"} font-semibold cursor-pointer shadow hover:brightness-125 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
