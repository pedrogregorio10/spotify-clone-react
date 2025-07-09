import {House, Search, LibraryBig} from "lucide-react"
function Aside(){
    return(
        <>
            <aside className="bg-zinc-950 w-72 p-6 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>

                <div className="text-zinc-200 space-y-3 mt-5 mb-10">
                    <a className="flex gap-3 text-white" href=""><House fill="white"/> Home</a>
                    <a className="flex gap-3" href=""><Search/> Home</a>
                    <a className="flex gap-3" href=""><LibraryBig/> Home</a>
                
                </div>

                <div>
                    <h2>My Playlist</h2>
                    <ul className="text-zinc-400">
                        <li>Recentilly Songs</li>
                        <li>Slowlly</li>
                        <li>Kuduro</li>
                        <li>Africans Vibe</li>
                        <li>Amapiano</li>
                    </ul>
                </div>
                
            </aside>
        </>
    )
}

export default Aside