"use client";

import Link from "next/link";
import { navItems } from "@/config/nav"
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const pathname = usePathname();

    return(
        <aside className="
            relative w-60 shrink-0
            after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0
            after:w-px after:bg-white/10
            px-6
        ">
            <nav>
                <ul className="pt-3 md:pt-4">
                    {navItems.map(({label, href, icon: Icon}) => {
                        const active = pathname.startsWith(href);
                        return(
                            <li key={href}>
                                <Link
                                href= {href}
                                aria-current={active ? "page" : undefined}
                                className={[
                                    "flex items-center gap-3 h-9 px-3 rounded-md text-sm transition-colors",
                                    active
                                    ? "bg-white/10 text-white"
                                    : "text-neutral-400 hover:bg-white/5 hover:text-white",
                                ].join(" ")}
                                >
                                    <Icon 
                                    className="h-5 w-5"
                                    />
                                    <span> {label} </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    )
}