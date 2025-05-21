import { useRef } from "react"

function ReferUse(){
    const inputRef= useRef(null)
    const inputTogRef=useRef()


    const inputHandle=()=>{
        inputRef.current.focus()
        inputRef.current.style.color="red"
        inputRef.current.placeholder="enter password"


    }
    const toogleHandle=()=>{
        inputTogRef.current.style.display='none'
        if(inputTogRef.current.style.display!='none'){
             inputTogRef.current.style.display='none'
        }else{
            inputTogRef.current.style.display='inline'
        }
        
    }

    return(
        <div>
        <h1 ref={inputTogRef}>useref1</h1>
        <button onClick={toogleHandle}>toggle</button>


        <h1>useRef</h1>
        <input ref={inputRef} type="text" placeholder="Enter name" />
        <button onClick={inputHandle}> Focus on input field</button>
        </div>

    )
}

export default ReferUse