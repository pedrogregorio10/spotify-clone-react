import Aside from "./layout/Aside"
import Main from "./layout/Main"
import Footer from "./layout/Footer"

function App() {
  return (
   <>
      <div  className="h-screen flex flex-col">

        <div className="flex flex-1 overflow-hidden">
          
          <Aside/>
          <Main/>
        </div>

        <Footer/>

      </div>
   </>
  )
}

export default App
