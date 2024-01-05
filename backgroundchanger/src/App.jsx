import { useState } from "react"

function App() {
 const [color, setColor] = useState('purple')

  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 rounded-full p-2 shadow-md" 
            onClick={() => setColor("red")}style={{backgroundColor : "red"}}>Red</button>
            <button className="outline-none px-4 rounded-full p-2 shadow-md" 
            onClick={() => setColor("green")}style={{backgroundColor : "green"}}>Green</button>
            <button className="outline-none px-4 rounded-full p-2 shadow-md" 
            onClick={() => setColor("blue")}style={{backgroundColor : "blue"}}>Blue</button>
            <button className="outline-none px-4 rounded-full p-2 shadow-md" 
            onClick={() => setColor("Pink")}style={{backgroundColor : "pink"}}>Pink</button>
            <button className="outline-none px-4 rounded-full p-2 shadow-md" 
            onClick={() => setColor("Skyblue")}style={{backgroundColor : "skyblue"}}>Skyblue</button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
