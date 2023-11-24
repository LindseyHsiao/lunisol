import promo from '../assets/promo.jpeg'

export default function Story() {
    return (
        <section className='story-section'>
            <div className='story-title'>
                <h4>Lunisol Wellness</h4>
                <h1>Our Story.</h1>
            </div>
            <div className='story-div'>
                <div className='story'>
                    <p>Our Story unfolds with a young girl whose heart is deeply intertwined with nature. A compassionate spirit ignited by a childhood spent crafting homes for stray animals, climbing trees, playing in the dirt, and embracing the wonders of the outdoors. The ocean became a playground of joy, shared with a loving father whose adventurous spirit mirrored the beauty of those formative years. These were all beautiful moments, yet the strongest memory of my childhood was the way I loved people. </p>
                </div>
                <div className='story-images'>
                    <img className='story-img' src={promo} alt="" />
                    <img className='story-img' src={promo} alt="" />
                    <img className='story-img' src={promo} alt="" />
                </div>
            </div>
            <div className='story-cont'>
                <div className='story-cont-img'>
                    <img className='story-img' src={promo} alt="" />
                    <img className='story-img' src={promo} alt="" />
                </div>
                <div className='story-cont-p'>
                    <p>My parents often reminisce about the transformation that occurred within our family, noting that I became the catalyst for an abundance of hugs and love. I, unknowingly, inspired them to embrace kindness and love more fervently than ever before. They talk about how before I was born, they never had family hugs nor said “I love you” so much. I truly believe that in my childhood years, I practiced pure universal love.</p>
                </div>
            </div>

        </section>
    )
}