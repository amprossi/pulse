import type { Monitor } from "@/data/monitors";
import StatusBadge from "./StatusBadge";

// ---------------------------------------- TEMP --------------------------------------------
function relativeMinutes(iso: string) {
  const diff = Math.max(0, Date.now() - new Date(iso).getTime());
  const mins = Math.floor(diff / 60_000);
  return mins === 0 ? "just now" : `${mins}m ago`;
}

function Sparkline() {
  return (
    <div className="h-8 w-full rounded-sm bg-gradient-to-r from-emerald-400/10 to-emerald-400/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            points="0,20 10,22 20,18 30,21 40,17 50,19 60,16 70,20 80,15 90,18 100,14"
            className="text-emerald-400/60"
          />
        </svg>
      </div>
    </div>
  );
}
// ---------------------------------------- TEMP --------------------------------------------

export default function MonitorCard({ monitor }: { monitor: Monitor }){
    const { name, status, latencyMs, updatedAt } = monitor;
    const isUp = status === "up";
    
    return(
        <article className="
        bg-white/5 ring-1 ring-white/10 
        rounded-xl p-4 md:p-5 
        hover:bg-white/7 hover:ring-white/15 transition-colors"
        >
            <header className="flex items-center justify-between mb-3">
                <h3 
                className="truncate text-base md:text-lg font-medium text-white/90"
                title={name}
                >
                    {name}
                </h3>
                <StatusBadge status={status}/>
            </header>

            <div className="text-3xl font-semibold tracking-tight mb-3">
                {isUp? `${latencyMs} ms` : "—"}
            </div>

            <Sparkline />

            <footer className="mt-3 text-xs text-neutral-400">
                Checked {relativeMinutes(updatedAt)}
            </footer>
        </article>
    )
}