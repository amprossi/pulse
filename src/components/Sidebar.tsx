import SidebarLinks from "./SidebarLinks"

export default function Sidebar(){

    return(
        <aside className="
            flex flex-col
            relative w-50 shrink-0
            after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0
            after:w-px after:bg-white/10
            pl-6
        ">
            <div className="
            overflow-y-auto
            scrollbar-custom
            ">
                <nav>
                    <SidebarLinks />
                </nav>
            </div>
        </aside>
    )
}