
function callFun(){
    alert("function called")
}

const fruit=()=>{
    alert("apple")
}


function Forms(){
    return(
        <div>

        <h1>event and function </h1>
        <button onClick={()=>fruit("apple")}>apple</button>
        <button onClick={()=>fruit("banana")}>banana</button>
        </div>
    )
}

export default Forms