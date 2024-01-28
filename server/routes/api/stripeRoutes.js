const router = require('express').Router();

const stripe = require("stripe")('sk_test_51ONh8QIh5BoOs8BLzvdAEtzmvhsHW4Xy0UoA61IVFi3DillekOb1Orh4dx15J4xmEF73K9tPilcmvk7L6Gu9Z4az00tbs6nFJM')

const domain = 'http://localhost:3001'

router.post("/", async (req, res) => {
    try{
    //    console.log(JSON.parse(req.body));
       const line_items = []
       for (let i = 0; i < req.body.length; i++) {
        
        // create a for loop that will need to iterate throught our cart items to create the product and prices for stripe
        const product = await stripe.products.create({
            name: req.body[i].name,
            description: req.body[i].description,
            images: req.body[i].images
        })
        
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: req.body[i].price * 100,
            currency: 'usd'
        })

        line_items.push({
            price: price.id,
            quantity: req.body[i].quantity
        })
       }
     

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/checkout`,
          });
        
        //   res.redirect(303, session.url);
        res.json(session);
        
    }catch (err){
        console.log(err);
        res.json(err)
    }
	// let { amount, id } = req.body
	// try {
	// 	const payment = await stripe.paymentIntents.create({
	// 		amount,
	// 		currency: "USD",
	// 		description: "Spatula company",
	// 		payment_method: id,
	// 		confirm: true
	// 	})
	// 	console.log("Payment", payment)
	// 	res.json({
	// 		message: "Payment successful",
	// 		success: true
	// 	})
	// } catch (error) {
	// 	console.log("Error", error)
	// 	res.json({
	// 		message: "Payment failed",
	// 		success: false
	// 	})
	// }
    
})

module.exports = router