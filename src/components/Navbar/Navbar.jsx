import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar (){
    return (
        <>
        <div className="nav-bar">
            <Link to="/" className="nav-name"><p>Joseph Milliken</p></Link>
            <div className='nav-links'>
                <Link to="/about">About</Link>
                <button className='nav-bar-btn'>Contact</button>
            </div>
        </div>
        </>
    )
}