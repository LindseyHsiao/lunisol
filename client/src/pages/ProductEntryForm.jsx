import React, { useState } from 'react'
import { createProduct } from '../utils/API'
import { Navigate } from 'react-router-dom'

export default function ProductEntryForm() {
    const [redirect, setRedirect] = useState(false);
    const [newProduct, setNewProduct] = useState({
        productName: '',
        description: '',
        productImage: '',
        category: '',
        price: 0,
        stock: 0
    })

    //on change 
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProduct({ ...newProduct, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await createProduct(newProduct)
            console.log(newProduct)
            if (response.ok) {
                setRedirect(true);
            }

        } catch (err) {
            console.log(err);
        }

    }

    if (redirect) {
        return <Navigate to={'/shop'} />
    }
    return (
        <div className="product-entry-div">
            <h2>Product Entry Form</h2>

            <form onSubmit={handleSubmit} className='new-product-form'>
                <input type="text" className='email-input'
                    placeholder={'Product Name'}
                    id='Product Name' name='Product Name'
                    value={newProduct.productName}
                    onChange={handleChange} />
                <input type="text" className='email-input'
                    placeholder={'Description'}
                    id='description'
                    name='description'
                    value={newProduct.description}
                    onChange={handleChange} />
                <input type="url" className='email-input'
                    placeholder={'Image URL'}
                    id='productImage'
                    name='productImage'
                    value={newProduct.productImage}
                    onChange={handleChange} />
                <input type="text" className='email-input'
                    placeholder={'Category'}
                    name='category'
                    value={newProduct.category}
                    onChange={handleChange} />
                <label>Price</label>
                <input type="number" className='email-input currency-input'
                    placeholder={'Price'}
                    name='price'
                    value={newProduct.price}
                    onChange={handleChange} />
                <label>Stock</label>
                <input type="text" className='email-input'
                    placeholder={'Stock'}
                    name='stock'
                    value={newProduct.stock}
                    onChange={handleChange} />

                <button type="submit"
                    className='product-entry-button'>Submit</button>

            </form>

        </div>
    )
}
