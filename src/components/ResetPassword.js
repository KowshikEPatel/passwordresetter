
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


export default function ResetPassword(){

    
    const [user,setUser] = useState({})

    useEffect(()=>{
        let { str } = useParams();
        fetch(`https://blissful-rosalind-539ba2.netlify.app/${str}`)
        .then(response=>response.json())
        .then(data=>setUser(data))
    },[])


    return <div> Now shing the following page {str}<div>{JSON.stringify(user)}</div></div>
  }