import './Navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar (){
    return (
        <>
        <div className="nav-bar">
            <p>Joseph Milliken</p>
            {/* <Link to="">About</Link> */}
            {/* <button className='nav-bar-btn'>About</button> */}
            <div className='nav-links'>
                <Link to="/about">About</Link>
                <button className='nav-bar-btn'>Contact</button>
            </div>
        </div>
        </>
    )
}