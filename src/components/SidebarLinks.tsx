"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/config/nav';

export default function SidebarLinks(){
    const pathname = usePathname();

    return(
        <ul className='mt-3 md:mt-4'>
            {navItems.map(({label, href, icon: Icon}) =>{
                const active = pathname.startsWith(href);

                return(
                    <li key={href}>
                        <Link
                            href={href}
                            aria-current={active ? "page" : undefined}
                            className={[
                                "flex max-w-full items-center h-9 rounded-md text-sm transition-colors gap-3",
                                "pl-2",
                                "group-data-[state=compact]:mr-1.5",
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
                    </li>
                )
            })}
        </ul>
    )
}