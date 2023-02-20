import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            <h1>List Users</h1>
            {
               loading ? <h1>Mazel</h1> : users.map(el=> <Link to={`/desc/${el.id}`}><h2>{el.name}</h2></Link>)
            }
        </div>
    )
}

export default ListUsers    