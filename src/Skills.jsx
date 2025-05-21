import { useState } from "react"

function Skills (){
    const[skills,setSkills]=useState([])

    const handle=(event)=>{
          console.log(event.target.value,event.target.checked)
          if(event.target.checked){
            setSkills
          }
    }
    return(
        <div>
        <h1>checkbox </h1>
         <input type="checkbox"onChange={handle} id="php" />
         <label htmlFor="php">Php</label>
         <br></br>
         <input type="checkbox"onChange={handle} id="js" />
         <label htmlFor="js">js</label>
         <br></br>

         <input type="checkbox"onChange={handle} id="node" />
         <label htmlFor="node">java</label>
        <br></br>

         <input type="checkbox"onChange={handle} id="str" />
         <label htmlFor="str">strcucture</label>

        </div>
    )
}

export default Skills