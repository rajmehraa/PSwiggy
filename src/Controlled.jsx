import { useState } from "react"

function Controlled(){
    const[name,setName]=useState()
    const[age,setAge]=useState()
    const[email,setEmail]=useState()

   const clear=()=>{
    setName('');
    setAge('');
    setEmail('')
   }

    return(
        <div>
        <form >
        <input type="text" value={name}  onChange={(event)=>setName(event.target.value)} placeholder="" />
        <br></br>

        <input type="password" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="password" />
        <br></br>
        

        <input type="email"value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email" />
        <br></br>
        
        <button>sumbit</button>

        <button onClick={clear}>clear</button>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        </form>
        </div>
    )
}
export default Controlled