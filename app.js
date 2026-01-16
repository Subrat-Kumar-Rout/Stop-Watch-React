import React, { useRef, useState } from "react"
import ReactDOM from "react-dom/client"

function Stopwatch(){

    const [count,setcount] = useState(0);
    let check = useRef(null);
    const [condition,setcondition] = useState(false)

    function Start(){
        
        if(!condition)
        check.current = setInterval(()=>{
            setcount((count)=>count+1);
        },1000)
        
        setcondition(true)
       
    }

    function Stop(){
        if(condition){
            clearInterval(check.current);
        }
        setcondition(false);
    }

    function Reset(){
        clearInterval(check.current);
        setcount(0)
        setcondition(false);
    }

    return(
        <>
         <h1>STOP WATCH: {count}</h1>
         <button onClick={Start}>Start</button>
         <br></br>
         <br></br>
         <button  onClick={Stop}>Stop</button>
         <br></br>
         <br></br>
         <button onClick={Reset}>Reset</button>
         </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Stopwatch/>);