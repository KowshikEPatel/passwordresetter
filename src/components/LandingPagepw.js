import {useState} from 'react'
/*import {Link} from 'react-router-dom'*/

export default function LandingPage(){

    /*
    const [passwords,setPasswords] = useState("")
    const [resetRequested,setResetRequested] = useState(false)

    

    function handleChangePassword(event){
            setPasswords(event.target.value)
    }
    
    function handleChangeResetRequested(event){
        setResetRequested(event.target.value)
    }

    const cred = {username,passwords,resetRequested}*/
    
    const [username,setUsername] = useState("") 
    function handleChangeUser(event){
        setUsername(event.target.value)
}


    return  <>
        <div className="card" style={{width:"20rem",margin:"70px 0 0 400px"}}>
             <div class="card-body">
                     <h4 class="card-title">Reset your password</h4>
                   <h5>Username</h5>
                   <input type="text" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangeUser}></input>
                   
             </div>
        </div>
        </>

}