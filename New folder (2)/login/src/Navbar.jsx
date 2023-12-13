
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
        <li className="nav-link"><Link className='home' to='/'>Login</Link></li>
                <li className='nav-link'><Link className='log' to='/log'>Registration</Link></li>
        </ul>
    </div>
  )
}

export default Navbar