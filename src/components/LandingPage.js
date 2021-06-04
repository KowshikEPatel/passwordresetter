import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage(){

    /*
    const [resetRequested,setResetRequested] = useState(false)

   

    
    
    function handleChangeResetRequested(event){
        setResetRequested(event.target.value)
    }*/

    /*const cred = {username,passwords,resetRequested}*/

    const [username,setUsername] = useState("")
    const [passwords,setPasswords] = useState("")

    function handleChangeUser(event){
        setUsername(event.target.value)
    }
    function handleChangePassword(event){
        setPasswords(event.target.value)
     }


    return  <>
        <div className="card" style={{width:"20rem",margin:"70px 0 0 400px"}}>
             <div class="card-body">
                     <h4 class="card-title">Login to your account</h4>
                   <h5>Username</h5>
                   <input type="text" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangeUser} value={username}></input>
                   <h5>Password</h5>
                   <input type="password" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangePassword} value={passwords}></input>
                   <Link to='/forgotpw'><small> Forgot password? </small></Link>
                   <Link to='/resetpassword/12346'><small> reset page </small></Link>
                        <div style={{textAlign:"right"}}>
                        <button className="btn btn-secondary">Login</button>
                        <p>New user? Sign up</p>
                        </div>
             </div>
        </div>
        </>

}