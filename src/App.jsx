import { useState } from "react"


function App() {
  
  //ye color olive return kr raha he.
                                    //string ""
  const [color, setColor] = useState("olive")

  return (
                                                                          //yaha pe olive return ho raha he.
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-4 py-1 rounded-xl"> test2

          {/* onclick method function expect krta he */}
          {/* setColor() ye function jo value retun kr raha he wo milega. */}
          {/* () => setColor("red") isko callback function bolte he. */}

          {/* outline-none py-1 px-4 text-black rounded-full shadow-lg */}

          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "green"}}>Green</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "blue"}}>blue</button>

          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "pink"}}>pink</button>

          <button onClick={() => setColor("lavender")} className="outline-none px-3 py-1 text-black rounded-lg shadow-2xl" style={{backgroundColor: "lavender"}}>lavender</button>

        </div>

      </div>

    </div>

    
      
  )
}

export default App
