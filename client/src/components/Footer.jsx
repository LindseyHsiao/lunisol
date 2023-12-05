import smallLogo from '../assets/smallLogo.png'
import iconIG from '../assets/icon-instagram.svg'


export default function Footer() {
    return (
        <section>
            <div className="footer">
                <div>
                    <p>Shop</p>
                    <p>About</p>
                </div>

                <div className='promo'>
                    <img className='promo-img' src={smallLogo} alt="lunisol logo" />
                    <h4>Lunisol Wellness</h4>
                </div>

                <div className='footer-right'>
                    <p>Contact</p>
                    <img src={iconIG} alt="instagram icon" />

                    {/* <p>Blog</p> */}
                    {/* <div>&copy; 2023 Lunisol Wellness. All Rights Reserved</div> */}
                </div>


            </div>
        </section>
    )
}