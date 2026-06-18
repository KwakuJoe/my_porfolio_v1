import { Link } from "react-router";
import Divider from "@/components/custom/Divider";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="md:h-20 h-28" />
      <Divider />

      <div className="flex flex-col flex-1 border-x border-gray-100 dark:border-zinc-900">
        {/* Top spacer row with dividers */}
        <div className="flex flex-1 flex-col items-center justify-center gap-y-6 px-6 py-20 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-zinc-500">
            404 — Page not found
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-zinc-100 leading-none">
            Oops.
          </h1>

          <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-xs leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-gray-700 dark:hover:bg-zinc-300 transition-colors"
          >
            Go home
          </Link>
        </div>

        <Divider />

        {/* Watermark */}
        <div className="overflow-hidden">
          <p className="text-center text-[clamp(3rem,15vw,9rem)] font-bold leading-none text-gray-100 dark:text-zinc-900 select-none tracking-tight translate-y-4">
            404
          </p>
        </div>
      </div>

      <Divider />
    </div>
  );
}
