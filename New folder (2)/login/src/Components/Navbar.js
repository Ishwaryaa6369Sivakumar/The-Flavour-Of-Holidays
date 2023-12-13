import { Link } from 'react-router-dom'
import  "./Navbar.css";
const Navbar = () =>{
    return(
        <div className="navbar-container">
            <ul className="con">
                
                <li><Link className='log' to='/'>Login</Link></li>
                <li><Link className='register' to='/register'>Registration</Link></li>
                </ul>
        </div>
    )
}
export default Navbar