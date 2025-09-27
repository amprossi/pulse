import {Menu} from "lucide-react";

export default function Header(){
    return(
        <header>
            <nav>
                {/* sidebar button & name */}
                <div>
                    <Menu />
                    <a href="/">
                        <h1> Pulse</h1>
                    </a>
                </div>
                {/* search, new button & notifications */}
                <div>
                    
                </div>
            </nav>
        </header>
    )
}
