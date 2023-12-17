import promo from '../assets/promo.jpeg'
import nurse from '../assets/alexaNurse.jpeg'
import logo from '../assets/smallLogo.png'
import alexaAndDad from '../assets/alexaAndDad.jpg'
import alexaHike from '../assets/alexaHike.jpg'
import alexaMonkey from '../assets/alexaMonkey.jpg'
import alexaSunset from '../assets/alexaSunset.jpg'
import alexaTeach from '../assets/alexaTeach.jpg'
import alexaYoga from '../assets/alexaYoga.jpg'
import alexaFam from '../assets/alexaFam.jpg'


export default function Story() {
    return (
        <section className='story-section'>

            <div className='story-div'>
                <div className='story'>
                    <h2>Our Story.</h2>

                    <p>Our Story unfolds with a young girl whose heart is deeply intertwined with nature. A compassionate spirit ignited by a childhood spent crafting homes for stray animals, climbing trees, playing in the dirt, and embracing the wonders of the outdoors. The ocean became a playground of joy, shared with a loving father whose adventurous spirit mirrored the beauty of those formative years. These were all beautiful moments, yet the strongest memory of my childhood was the way I loved people. </p>
                </div>
                <div className='story-images'>
                    <img className='story-img' src={alexaAndDad} alt="" />
                    <img className='story-img' src={alexaMonkey} alt="" />
                    <img className='story-img' src={alexaFam} alt="" />
                </div>
            </div>

            <div className='story-cont-img'>
                <p> My parents often reminisce about the transformation that occurred within our family, noting that I became the catalyst for an abundance of hugs and love. I, unknowingly, inspired them to embrace kindness and love more fervently than ever before. They talk about how before I was born, they never had family hugs nor said “I love you” so much. I truly believe that in my childhood years, I practiced pure universal love.
                    In those tender years, I absorbed the emotions of those around
                    me – feeling their pain and sharing in their joy. It was during this
                    process of empathetic connection that a seed was planted. A
                    growing desire to help and heal. I longed to empower others to
                    feel their best and to be a source of healing. This led me down
                    the path of healthcare. I pursued my education at the University
                    of Central Florida, earning a Bachelor's degree in Nursing.
                    I later went on to become a Pediatric Nurse, helping heal the
                    purest beings on this planet, children. The journey through the
                    nursing profession was marked by mental, emotional, and
                    spiritual challenges. In my lowest moments, yoga became my refuge, providing a sanctuary for self-discovery and growth. During my senior year at university, I completed a transformative 200-Hour Yoga Teacher Training, setting the stage for a magical journey of self-healing and wellness.</p>
                <img className='story-nurse-img' src={nurse} alt="" />

            </div>


            <div className='story-div'>

                <div className='story-images'>
                    <img className='story-img' src={alexaHike} alt="" />
                    <img className='story-img' src={alexaTeach} alt="" />
                    <img className='story-img' src={alexaYoga} alt="" />
                </div>
                <div className='story-healing'>
                    <p>Exploring various healing modalities – embodiment, movement medicine, herbal medicine, and more – I discovered that my health and wellness were within my control, it was my responsibility and no one else's. Armed with this knowledge, I delved into mind/body/spirit balance, adopting better lifestyle habits, crafting my own self-care products, and actively shaping the life of my dreams. Eager to share this wisdom, Lunisol Wellness was born. </p>
                </div>
            </div>
            <div className='story-time'>
                <img src={logo} alt="" />
                <h2>LUNISOL</h2>
                <h4>wellness</h4>
                <p>Lunisol is more than a brand; it is a testament to my personal journey and a vessel for natural healing within the community. My mission is to empower individuals to take control of their health and wellness by drawing from the knowledge I’ve accumulated since birth and the potent gifts bestowed upon us by the Earth. I am dedicated to guiding you on a transformative journey towards well-being and self-discovery through the sharing of this knowledge and the all-natural plant medicine within our products. </p>
            </div>
            <div className='story-pic-story'>
                <div>
                    <img className='story-pic' src={alexaSunset} alt="" />
                </div>
                <div className='creator'>
                    <h2>Alexa Villamizar</h2>
                    <p>Creator of Lunisol Wellness</p>
                </div>
            </div>


        </section>
    )
}