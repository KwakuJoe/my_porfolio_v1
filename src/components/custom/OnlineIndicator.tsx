export default function OnlineIndicator() {
  return (
    <span className="relative flex h-3 w-3 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_4px_rgba(34,197,94,0.7)] ring-2 ring-green-300/60" />
    </span>
  );
}