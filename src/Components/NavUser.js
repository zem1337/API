import { Link } from "react-router-dom"

const NavUser=({auth,setAuth})=>{
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>

                {
                    auth ?
                    <>
                    <li><Link to='/listusers'>Users</Link></li>
                    <li onClick={()=>setAuth(false)}>Logout</li>
                    </>
                    :
                    <li onClick={()=>setAuth(true)}>Login</li>
                }
                
            </ul>
        </div>
    )
}

export default NavUser