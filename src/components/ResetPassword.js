
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


export default function ResetPassword(){

    let { str } = useParams();
    
    const [user,setUser] = useState(null)
   
    useEffect(()=>{
        fetch(`https://kp-passwordresetter.herokuapp.com/${str}`)
            .then(response=>response.json())
            .then(data=>{setUser(data)})
    },[])

     
    return user && <div> Now shing the following page<div>{JSON.stringify(user)}</div></div>
  }