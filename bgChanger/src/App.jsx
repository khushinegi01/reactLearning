import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
       <div className="w-full h-screen duration-200 " 
       style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-0.5">
          <div className="flex flex-wrap justify-center px-3 gap-3 shadow-lg rounded-3xl mx-1 py-0.5" style={{backgroundColor : "#FCE7C8"}}>
            <button 
            onClick={()=> setColor("#FFCF50")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#FFCF50",color:'#854836'}}>
              Sunlight
            </button>

            <button 
            onClick={()=> setColor("#690B22")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#690B22",color:'#F1E3D3'}}>
              Maroon
            </button>

            <button 
            onClick={()=> setColor("#1B4D3E")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#1B4D3E",color:'#F1E3D3'}}>
              X-Mas Green
            </button>

            <button 
            onClick={()=> setColor("#E07A5F")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#E07A5F",color:'#F1E3D3'}}>
              Pink
            </button>

            <button 
            onClick={()=> setColor("#F1E3D3")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#F1E3D3",color:'#212121'}}>
              Dirt Grey
            </button>

            <button 
            onClick={()=> setColor("#574964")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#574964",color:'#F1E3D3'}}>
              Purple
            </button>

            <button 
            onClick={()=> setColor("#E6C767")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "#E6C767",color:'#854836'}}>
              Olive
            </button>

            <button 
            onClick={()=> setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor : "olive"}}>
              Default
            </button>
          </div>
        </div>


       </div>
    </>
  )
}

export default App
