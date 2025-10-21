import SidebarLinks from "./SidebarLinks"

export default function Sidebar(){

    return(
        <aside 
        id="left-sidebar"
        data-state="expanded"
        className="
            group
            flex flex-col
            relative shrink-0
            pl-6
            overflow-x-hidden
            transition-[width] duration-200
            w-50 data-[state=compact]:w-16
            after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0
            after:w-px after:bg-white/10
        ">
            <div className="
            overflow-y-auto overflow-x-hidden min-w-0
            pr-3
            scrollbar-custom
            ">
                <nav>
                    <SidebarLinks />
                </nav>
            </div>
        </aside>
    )
}