import largeYellowLogo from '../assets/largeYellowLogo.png'
import iconIG from '../assets/icon-instagram.svg'
import iconFacebook from '../assets/icon-facebook.svg'
import alexaHeart from '../assets/alexaHeart.jpeg'

export default function Home() {
    return (
        <section className='home'>
            <div className='home-main'>
                <div className='home-left'>
                    <h2>Healing starts here</h2>
                    <p>We aim to re-introduce natural healing by empowering individuals to prioritize their health and wellness  through the sharing of all-natural products and knowledge that supports this journey</p>
                    <button>Shop Now</button>
                </div>
                <div>
                    <img className='home-logo' src={largeYellowLogo} alt="lunisol icon" />
                </div>
            </div>
            <div className='home-icons'>
                <img src={iconIG} alt="instagram icon" />
                <img src={iconFacebook} alt="facebook icon" />
            </div>

            <div className='about-div'>
                <div className='about-img'>
                    <img className='alexa-heart' src={alexaHeart} alt='Alexa in meditative pose'></img>
                </div>
                <div className='about-text'>
                    <h2>About</h2>
                    <h3>Alexa Lunisol Wellness</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem voluptatum doloremque, maxime totam asperiores! Quas earum quae nisi quod cupiditate. Magni cumque, praesentium non veniam animi beatae neque fuga.
                    </p>
                </div>
            </div>

            <div className='our-products'>
                <div className='product-text'>
                    <h2>Our Products</h2>
                    <h3>For Everybody</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem voluptatum doloremque, maxime totam asperiores! Quas earum quae nisi quod cupiditate. Magni cumque, praesentium non veniam animi beatae neque fuga.
                    </p>
                    <button>Shop Now</button>
                </div>
                <div className='products'>
                    <div>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                    <div>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                    <div>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                </div>

            </div>
        </section>


    )
}