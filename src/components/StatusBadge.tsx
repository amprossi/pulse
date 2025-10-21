type Props = { status: "up" | "down" };

export default function StatusBadge({ status }: Props){
    const isUp = status === "up";

    return(
        <span
        className={[
            "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium ring-1 ring-inset",
            isUp? "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20" : "bg-red-500/10 text-red-300 ring-red-500/20",
        ].join(" ")}
        >
            {isUp ? "UP" : "DOWN"}
        </span>
    );
}