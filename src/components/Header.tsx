import {Menu, Search, Bell} from "lucide-react";

export default function Header(){
    return(
        <header 
            className="
            relative
            px-6 py-3
            after:content-[''] after:absolute after:bottom-0 
            after:left-6 after:right-0 
            after:h-px after:bg-white/10
            "

        >
            <nav>
                <div className="flex items-center justify-between">
                    {/* sidebar button & name */}
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-md hover:bg-neutral-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500">
                            <Menu className="text-neutral-500"/>
                        </button>
                        <a href="/">
                            <span className="font-medium text-base md:text-lg tracking-tight">
                                Pulse
                            </span>
                        </a>
                    </div>
                    {/* search, new button & notifications */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center gap-2 h-9 px-3 rounded-lg border border-white/10 bg-white/5 ">
                            <Search size={18} className="text-neutral-400"/>
                            <input
                            className="outline-none placeholder:text-neutral-500 text-sm w-48 md:2-72"
                            type="text"
                            placeholder="Search"
                            />
                        </div>
                        <button className="h-9 px-4 rounded-md bg-blue-700/90 hover:bg-blue-600/80 text-white text-sm font-medium shadow-sm ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition">
                            New Monitor
                        </button>
                        <button>
                            <Bell className="text-neutral-400 h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
