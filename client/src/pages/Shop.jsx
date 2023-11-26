import promo from '../assets/promo.jpeg'

export default function Shop() {
    return (
        <section>
            <div className='shop-nav'>
                <div className="shop">
                    <h1>Shop</h1>
                </div>
                <div>
                    <nav className='shop-nav-options'>
                        <p>All</p>
                        <p>Body</p>
                        <p>Face</p>
                        <p>Seasonal</p>
                    </nav>
                </div>
            </div>
            <div className='shop-items'>
                <div className="single-item">
                    <img className='single-item-img' src={promo} alt="" />
                    <h4>title</h4>
                    <button className='single-item-button'>Add to Cart</button>
                </div>
                <div className="single-item">
                    <img className='single-item-img' src={promo} alt="" />
                    <h4>title</h4>
                    <button className='single-item-button'>Add to Cart</button>
                </div>
                <div className="single-item">
                    <img className='single-item-img' src={promo} alt="" />
                    <h4>title</h4>
                    <button className='single-item-button'>Add to Cart</button>
                </div>
                <div className="single-item">
                    <img className='single-item-img' src={promo} alt="" />
                    <h4>title</h4>
                    <button className='single-item-button'>Add to Cart</button>
                </div>

            </div>
        </section>
    )
}