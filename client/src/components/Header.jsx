import hands from '../assets/smallLogo.png'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Header() {
    return (
        <header>
            <Link to='/'>
                <div className='logo-container'>
                    <img src={hands} alt="lunisol logo" className='header-logo' />
                    <h2 className='header-name'>LUNISOL WELLNESS</h2>
                </div>
            </Link>
            <div className='nav-container'>
                <nav className='nav-left'>

                <div className='dropdown nav-item'>
                        <p>Shop</p>
                        <div className="dropdownOptions">
                            <Link to="/story">Our Story</Link>
                            <Link to="#">Our Values</Link>
                            <Link to="#">Our Values</Link>
                        </div>
                    </div>


                    <div className='dropdown nav-item'>
                        <p>About</p>
                        <div className="dropdownOptions">
                            <Link to="/story">Our Story</Link>
                            <Link to="#">Our Values</Link>
                        </div>
                    </div>

                    <div className='dropdown nav-item'>
                        <p>Contact</p>
                        <div className="dropdownOptions">
                            <Link to="/story">FAQ</Link>
                            <Link to="#">Stay in Touch</Link>
                        </div>
                    </div>

                    <Link to='#' className='nav-item'>Blog</Link>

                </nav>
                <nav className='nav-right'>
                    <input type='text' placeholder='Search' className='nav-item'></input>
                    <a href='#' className='nav-item'>
                        <MdOutlineShoppingBag />
                        </a>
                </nav>
            </div>
        </header>
    )
}