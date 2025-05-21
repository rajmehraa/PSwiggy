import { useState } from "react";

function Login (){

    const[count,setCount]=useState(0);
    return(

       <div>
       <h1>count</h1>
       <button onClick={()=>setCount(count+1)}>counter</button>
       {
        count===0? <h1>Condtion:0</h1>
        :count===1? <h1>Condtion:1</h1>
        :count===2? <h1>Condtion:2</h1>
        //:count==0?<h1>Condtion:3</h1>
        :null
       }
       </div>
    )
}

export default Login