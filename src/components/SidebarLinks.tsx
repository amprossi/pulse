"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Tooltip from "@radix-ui/react-tooltip";
import { useEffect, useState } from 'react';

import { navItems } from '@/config/nav';

function useIsSidebarCompact(){
    const [ isCompact, setIsCompact ] = useState(false);

    useEffect(() => {
        const el = document.getElementById("left-sidebar");
        if (!el) return;

        const update = () => {
            setIsCompact(el.getAttribute("data-state") === "compact"); 
        };

        update();

        const obs = new MutationObserver(update);
        obs.observe(el, { attributes: true, attributeFilter: ["data-state"] });

        return () => obs.disconnect();
    }, []);
    
    return isCompact;
}

export default function SidebarLinks(){
    const pathname = usePathname();
    const isCompact = useIsSidebarCompact();

    return(
        <ul className='mt-3 md:mt-4'>
            {navItems.map(({label, href, icon: Icon}) =>{
                const active = pathname.startsWith(href);

                const [open, setOpen] = useState(false);
                useEffect(() => {
                    setOpen(false);
                }, [isCompact]);

                return(
                    <li key={href}>
                        <Tooltip.Provider delayDuration={150}>
                            <Tooltip.Root
                                open={isCompact ? open : false}
                                onOpenChange={setOpen}
                                disableHoverableContent
                            >
                                <Tooltip.Trigger asChild>
                                    <Link
                                        href={href}
                                        aria-current={active ? "page" : undefined}
                                        className={[
                                            "flex w-full max-w-full items-center h-9 rounded-md text-sm transition-colors gap-3",
                                            "pl-2",
                                            "group-data-[state=compact]:pr-7",
                                            active
                                                ? "bg-white/10 text-white"
                                                : "text-neutral-400 hover:bg-white/5 hover:text-white",
                                        ].join(" ")}
                                        >
                                        <Icon className='h-5 w-5 flex-none shrink-0'/>
                                        <span className='whitespace-nowrap'>
                                            {label}
                                        </span>
                                    </Link>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content
                                        side='right'
                                        sideOffset={10}
                                        className='
                                        px-2.5 py-1 rounded-md text-xs font-medium
                                        bg-neutral-900/80 text-neutral-100
                                        backdrop-blur-sm shadow-md
                                        animate-in fade-in-0 zoom-in-95 duration-150
                                        '
                                    >
                                        {label}
                                        <Tooltip.Arrow className='fill-neutral-900/80 stroke-white/10'/>
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                    </li>
                )
            })}
        </ul>
    )
}