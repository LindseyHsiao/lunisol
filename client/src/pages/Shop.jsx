import promo from '../assets/promo.jpeg'
import { Link } from 'react-router-dom'
import { getProducts , getAllProductsByCategory} from '../utils/API'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions'

export default function Shop() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [products, setProducts] = useState([])

    const { cart } = state;

    const addToCart = (cartItem)=> {
        const itemInCart = cart.find((item)=> item._id === cartItem._id)
        if(itemInCart){
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: cartItem._id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            })
        }else{
            dispatch({
            type: ADD_TO_CART,
            product: {...cartItem, purchaseQuantity: 1, subtotal: 0}
        })
        }
        
    }
    // console.log(cart);
        
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getProducts()
                if (!response.ok) {
                    throw new Error('data didnt fetch')
                }
                const productData = await response.json()
                setProducts(productData)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const getAllData = async () => {
        try {
            const response = await getProducts()
            if (!response.ok) {
                throw new Error('data didnt fetch')
            }
            const productData = await response.json()
            setProducts(productData)
        } catch (error) {
            console.log(error)
        }
    }

 const getCategoryProds = async (category) => {
    try {

        const response = await getAllProductsByCategory(category)
                if (!response.ok) {
                    throw new Error('data didnt fetch')
                }
                const productData = await response.json()
                setProducts(productData)
        
    } catch (error) {
        console.log(error);
    }
 }


    return (
        <section>
            <div className='shop-nav'>
                <div className="shop">
                    <h2>Shop</h2>
                </div>
                <div>
                    <nav className='shop-nav-options'>
                        <button type='button' onClick={()=> getAllData()}>All</button>
                        <p>Body</p>
                        <p>Face</p>
                        <p onClick={()=> getCategoryProds('6581c5348b561c9adf29ab18')}>Seasonal</p>
                        <p onClick={()=> getCategoryProds('65ac092167fb2847b004a19a')}>Roll On</p>
                    </nav>
                </div>
            </div>
            <div className='shop-items'>
                {products?.map((item) => (
                    <div className="single-item" key={item._id}>
                        <Link to={`/singleproduct/${item._id}`}>
                        <img className='single-item-img' src={item.productImage} alt={item.productImage} />
                        </Link>
                        <h4>{item.productName}</h4>
                        <button className='single-item-button' onClick={()=> addToCart(item)}>Add to Cart</button>
                    </div>
                ))}

            </div>
        </section>
    )
}