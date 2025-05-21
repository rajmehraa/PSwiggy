import { useEffect, useState } from "react"

function Compudate(){
    const[counter,setCounter]=useState(0);
    const[data,setData]=useState(0);

    useEffect(()=>{
        //callOnce()
        //counterFunction()
        counterFunction()
    },[counter])

    function counterFunction(){
        console.log("counterFunction",counter)
       
        
    }

    function callOnce(){
        console.log("callonce")
    }
   

    return(
        <div>
        <h1>call once</h1>
        <button onClick={()=>setCounter(1)}>Counter</button>
        <button onClick={()=>setData(data+1)}>Data</button>
        </div>

    )
}
export default Compudate