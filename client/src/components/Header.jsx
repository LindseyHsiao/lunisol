import hands from '../assets/smallLogo.png'

export default function Header() {
    return (
        <header>
            <div className='header'>
                <img src={hands} alt="" className='header-logo' />
                <h2 className='header-name'>LUNISOL WELLNESS</h2>
            </div>
            <nav>
                <ul className='nav-left'>
                    <li>shop</li>
                    <li>blog</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
                <ul className='nav-right'>
                    <li>search</li>
                    <li>shopping cart icon</li>
                </ul>
            </nav>
        </header>
    )
}