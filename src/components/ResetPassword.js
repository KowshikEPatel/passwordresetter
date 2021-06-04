
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


export default function ResetPassword(){

    let { str } = useParams();
    const [urlstring,setUrlstring] = useState()
    const [user,setUser] = useState({})
    setUrlstring(str)
        fetch(`https://blissful-rosalind-539ba2.netlify.app/${urlstring}`)
        .then(response=>response.json())
        .then(data=>setUser(data))
   


    return <div> Now shing the following page {str}<div>{JSON.stringify(user)}</div></div>
  }