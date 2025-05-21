import { useEffect } from "react"

const Counter= ({count,data})=>{



    



    useEffect(()=>{
        console.log("mounting phase only")
    },[])

    useEffect(()=>{
        console.log("update phase only")
    },[count])



    return(
        <div>
           <h1 >aser {count}</h1>
           <h1>sdnasknd{data}</h1>
        </div>
    )
}



export default Counter