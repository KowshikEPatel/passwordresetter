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
    const [displayvalue,setDisplayvalue]=useState('block')
    const [displaysuccess,setDisplaysuccess] = useState('none')
    const [authUser,setauthUser] = useState('')
    function handleChangeUser(event){
        setUsername(event.target.value)
    }
    function handleChangePassword(event){
        setPasswords(event.target.value)
     }

     function getuser(){
         fetch('',{
             method:'POST',
             headers:{
                'Content-Type': 'application/json'
             },
             body:JSON.stringify({
                 "user_name":username,
                 "password":passwords
             })
         })
         .then(response=>{
             console.log(response.status)
             response.blob().then(data=>{
                setauthUser(data["user"])
                setDisplayvalue('none')
                setDisplaysuccess('block')
             })
         })
         
     }

    return  <>
        <div className="card" style={{width:"20rem",margin:"70px 0 0 400px",display:displayvalue}}>
             <div class="card-body">
                     <h4 class="card-title">Login to your account</h4>
                   <h5>Username</h5>
                   <input type="text" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangeUser} value={username}></input>
                   <h5>Password</h5>
                   <input type="password" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangePassword} value={passwords}></input>
                   <Link to='/forgotpw'><small> Forgot password? </small></Link>
                   
                        <div style={{textAlign:"right"}}>
                        <button className="btn btn-secondary" onClick={getuser}>Login</button>
                        <p>New user? Sign up</p>
                        </div>
             </div>
        </div>
        <div className="card" style={{width:"20rem",margin:"70px 0 0 400px",display:displaysuccess}}>
             <div class="card-body">
             <h4 class="card-title">Welcome to our website {authUser}</h4>
             </div>
        </div>
        </>

}