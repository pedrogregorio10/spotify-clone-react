import {Play,SkipForward,SkipBack,Shuffle,Repeat,Heart,Volume1,Minus,Minimize2,ListMusic,MicVocal,TabletSmartphone} from "lucide-react"
function Footer(){
    return(
        <>
            <footer className="bg-zinc-800 p-6 border-t border-zinc-500 flex justify-between">

                <div>
                    <div className="flex gap-2 text-xs"><img className="w-16" src="/chris-brown.jpg" alt="Cris brown Track" /> 
                    <p className="flex flex-col">Chris Brown (feat. Riahanna) <span>ALL Back</span> </p>
                   <Heart size={15}/> </div>
                </div>

            <div className="space-y-2">
  <div className="flex text-zinc-300 items-center gap-2.5">
    <Shuffle size={15} className="hover:bg-zinc-600/80 rounded-full cursor-pointer" />
    <SkipBack size={20} className="hover:bg-zinc-600/80 rounded-full cursor-pointer" />
    <span className="bg-white rounded-full hover:bg-lime-200/80 cursor-pointer">
      <Play fill="black" />
    </span>
    <SkipForward size={20} className="hover:bg-zinc-600/80 rounded-full cursor-pointer" />
    <Repeat size={15} className="hover:bg-zinc-600/80 rounded-full cursor-pointer" />
  </div>

  <div className="flex gap-2 items-center">
    <div className="text-xs">0:25</div>

    <div className="w-full max-w-96 h-1 bg-white rounded overflow-hidden">
        <div className="h-full bg-green-500" style={{ width:'57%' }}></div>
    </div>

    <div className="text-xs">2:45</div>
  </div>
</div>


                <div className="">
                    <div className="flex items-center gap-2">
                        <MicVocal/>
                        <ListMusic/>
                        <TabletSmartphone/>
                        <Volume1/>
                        <div className="w-full max-w-60 h-1 bg-zinc-400"></div>
                        <Minimize2/>
                    </div>
                    
                </div>

            </footer>
        </>
    )
}
export default Footer