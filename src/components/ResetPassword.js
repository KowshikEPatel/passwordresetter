
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


export default function ResetPassword(){

    let { str } = useParams();
    const [urlstring,setUrlstring] = useState()
    const [user,setUser] = useState({})
   
    
     const exec=()=>{fetch(`https://blissful-rosalind-539ba2.netlify.app/${urlstring}`)
     .then(response=>response.json())
     .then(data=>setUser(data))}   
     useEffect(()=>{
        setUrlstring(str)
        exec()
    },[str])
    return <div> Now shing the following page {str}<div>{JSON.stringify(user)}</div></div>
  }