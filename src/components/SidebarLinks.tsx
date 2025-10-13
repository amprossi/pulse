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
                                "flex items-center gap-3 h-9 px-3 rounded-md text-sm transition-colors",
                                active
                                ? "bg-white/10 text-white"
                                : "text-neutral-400 hover:bg-white/5 hover:text-white",
                            ].join(" ")}
                            >
                            <Icon className='h-5 w-5'/>
                            <span>{label}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}