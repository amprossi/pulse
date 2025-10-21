import { monitorsMock } from "@/mocks/monitors.mock";
import MonitorCard from "@/components/MonitorCard";

export default function Home() {
  return (
    <section className="p-6 md:p-8">
      <h2 className="text-lg md:text-2xl font-semibold tracking-tight mb-4">
        Monitor
      </h2>

      <div className="grid gap-6 auto-rows-max grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {monitorsMock.map((m) => (
          <MonitorCard key={m.id} monitor={m}/>
        ))}
      </div>
    </section>
  );
}
