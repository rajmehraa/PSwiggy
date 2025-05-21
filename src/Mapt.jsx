

function Mapt(){
 
    const username=['sam','asd','asddf','asdasd']

    const userData = [
        {
            name: "anil",
            age: 29,
            email: "anil@gmail.com",
            idas: 1
        },
        {
            name: "hello",
            age: 39,  // Missing age value, should be filled in
            email: undefined,  // Missing email value, should be filled in
            idas: undefined  // Missing idas value, should be filled in
        },
        {
            name: "rahul",
            age: 98,
            email: "rah@gmail.com",
            idas: 3
        },
        {
            name: "hea;kjd;a",
            age: 100,
            email: "asdxff@gmail.com",
            idas: 1
        }
    ];
    
    return(
        <div>
          <table>
          <thead>
          <tr>
             <td>Id</td>
             <td>nmae</td>
             <td>age</td>
             <td>email</td>
          </tr>
          <tbody>
             {
                userData.map((user)=>{
            <tr key={user.idas}>
            <td>{user.idas}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            </tr>
                  
                })
             }
          </tbody>
          </thead>
          </table>
        </div>

    )
}

export default Mapt