import { ChevronLeft,ChevronRight, User } from "lucide-react"
function Main(){
    return(
        <>
            <main className="bg-zinc-900 flex-1 p-6 space-y-6 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <a className="bg-zinc-950 rounded-full p-1 hover:bg-zinc-700/40" href=""><ChevronLeft/></a>
                        <a className="bg-zinc-950 rounded-full p-1 hover:bg-zinc-700/40" href=""><ChevronRight/></a>
                    </div>
                    <div>
                    <a className="flex gap-2" href=""><User/> Mony Gregorio</a>
                    </div>
                </div>
                
                <h1 className="text-2xl font-semibold">Africans Playlist</h1>

                <div className="grid grid-cols-3 gap-3">
                
                    <div className="bg-zinc-600/50 p-1 flex gap-2"><img className="w-28"  src="/image2.webp" alt="Image album mine"/> Kuduro Slow</div>
                    <div className="bg-zinc-600/50 p-1 flex gap-2"><img className="w-28"  src="/image2.webp"/> Kuduro Slow</div>
                    <div className="bg-zinc-600/50 p-1 flex gap-2"><img className="w-28"  src="/image2.webp"/> Kuduro Slow</div>
                    <div className="bg-zinc-600/50 p-1 flex gap-2"><img className="w-28"  src="/image2.webp"/> Kuduro Slow</div>
                    <div className="bg-zinc-600/50 p-1 flex gap-2"><img className="w-28"  src="/image2.webp"/> Kuduro Slow</div>
                    <div className="bg-zinc-600/50 p-1 flex gap-2"><img className="w-28"  src="/image2.webp"/> Kuduro Slow</div>         
                </div>

                <h2 className="font-medium">Made for Mony Gregorio</h2>

                <div className="grid grid-cols-5 gap-1.5">
                    <div><img className="w-24" src="/african-image.jpg" alt="african image album" /> Angola</div>
                    <div><img className="w-24" src="/african-image.jpg" alt="african image album" /> Angola</div>
                    <div><img className="w-24" src="/african-image.jpg" alt="african image album" /> Angola</div>
                    <div><img className="w-24" src="/african-image.jpg" alt="african image album" /> Angola</div>
                    <div><img className="w-24" src="/african-image.jpg" alt="african image album" /> Angola</div>
                    <div><img className="w-24" src="/african-image.jpg" alt="african image album" /> Angola</div>
                    
                </div>
            </main>
        </>
    )
}
export default Main