"use client";

import { useEffect, useState, type PropsWithChildren } from "react";

type SbState = "expanded" | "compact";
const STORAGE_KEY = "sb-left";

export default function SidebarToggle({children}: PropsWithChildren){
    const [state, setState] = useState<SbState>("expanded");

    useEffect(() => {
        const saved = (localStorage.getItem(STORAGE_KEY) as SbState) || "expanded";
        setState(saved);
        const el = document.getElementById("left-sidebar");
        if (el) el.setAttribute("data-state", saved);
    }, []);

    useEffect(() =>{
        localStorage.setItem(STORAGE_KEY, state);
        const el = document.getElementById("left-sidebar");
        if (el) el.setAttribute("data-state", state);
    }, [state]);

    const toggle = () => {
        setState((s) => (s === "expanded" ? "compact" : "expanded"));
    };

    return(
        <button
        type="button"
        onClick={toggle}
        className="p-2 rounded-md hover:bg-neutral-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
        >
            {children ?? (state === "expanded"? "«" : "»")}
        </button>
    )
}