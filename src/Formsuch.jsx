import { useRef } from "react";

function Naruto(){

    //const userRef=useRef()
    

    const handle=(event)=>{
       event.preventDefault()
       const user=document.querySelector("#username").value;
       console.log(user);
       const password=document.querySelector("#password").value
       console.log(password)
       
       
    }

    // const handleformRef=(event)=>{
    //     event.preventDefault()
    //     const user=userRef.current.value
    //     console.log(user)

    // }
    return(
        <div>
        <form  onSubmit={handle}>
        <h1>Ucoo</h1>
        <input type="text" id="username" placeholder="enter name" />
        <br></br>

        <input type="text" id="password" placeholder="enter name" />
        <br></br>
        <button>
           Submit
        </button>

        </form>


        <form  onSubmit={handle}>
        <h1>Ucoo with useref</h1>
        <input type="text" id="username" placeholder="enter name" />
        <br></br>

        <input type="text" id="password" placeholder="enter name" />
        <br></br>
        <button>
           Submit with ref
        </button>

        </form>
   
         </div>
    )
}
export default Naruto