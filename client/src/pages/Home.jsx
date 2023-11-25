import largeYellowLogo from '../assets/largeYellowLogo.png'
import iconIG from '../assets/icon-instagram.svg'
import iconFacebook from '../assets/icon-facebook.svg'
import alexaHeart from '../assets/alexaHeart.jpeg'
import smallLogo from '../assets/smallLogo.png'

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
                    <div className='single-product'>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                    <div className='single-product'>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                    <div className='single-product'>
                        <img className='product-img' src={largeYellowLogo} alt="" />
                        <h4>Product Name</h4>
                    </div>
                </div>
            </div>

            <div className='home-story-div'>
                <div className='home-story-left'>
                    <h2>Our Story</h2>
                    <p>We aim to re-introduce natural healing by empowering individuals to prioritize their health and wellness  through the sharing of all-natural products and knowledge that supports this journey</p>
                    <button className='story-button'>Read More</button>
                </div>
                <div>
                    <img className='home-logo' src={largeYellowLogo} alt="lunisol icon" />
                </div>
            </div>
            <div className='journey-quote'>
                <h3 className='journey-quote-words'>"Your Journey. Your wellness. <br /> Our passion."</h3>
                <h4 className='journey-name'>Alexa Villamizar, Founder</h4>
            </div>

            <div className='promo-div'>
                <div className='promo'>
                    <img className='promo-img' src={smallLogo} alt="lunisol logo" />
                    <h4>Lunisol Wellness</h4>
                </div>
                <div className='essentials-text'>
                    <h3>Essentials for a <br />full life</h3>
                    <p>Stay healthy and live confidently with Spring & Sky</p>
                </div>
            </div>

        </section>


    )
}