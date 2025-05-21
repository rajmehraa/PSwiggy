import { useState } from "react";


function Inputsss(){
    const [val,setVal]=useState("")
    return(
        <div>
        
        <h1>hello3</h1>
        <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="first name"/>
        
        <h1>{val}</h1>
        <button onClick={()=>setVal("anil ")}>clear button</button>
        
        </div>
 
 
    )
}

export default Inputsss