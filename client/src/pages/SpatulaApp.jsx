// // import { useState, useEffect } from 'react';
// // import spatula from '../assets/smallLogo.png';
// // import StripeContainer from '../components/StripeContainer';


// // const ProductDisplay = () => (
// //     <section>
// //       <div className="product">
// //         <img
// //           src="https://i.imgur.com/EHyR2nP.png"
// //           alt="The cover of Stubborn Attachments"
// //         />
// //         <div className="description">
// //         <h3>Stubborn Attachments</h3>
// //         <h5>$20.00</h5>
// //         </div>
// //       </div>
// //       <form action="/payment" method="POST">
// //         <button type="submit">
// //           Checkout
// //         </button>
// //       </form>
// //     </section>
// //   );

// // const Message = ({ message }) => (
// //     <section>
// //       <p>{message}</p>
// //     </section>
// //   );

// // function SpatulaApp() {
// // 	const [showItem, setShowItem] = useState(false);
// //     const [message, setMessage] = useState("");

// //     useEffect(() => {
// //         // Check to see if this is a redirect back from Checkout
// //         const query = new URLSearchParams(window.location.search);

// //         if (query.get("success")) {
// //           setMessage("Order placed! You will receive an email confirmation.");
// //         }

// //         if (query.get("canceled")) {
// //           setMessage(
// //             "Order canceled -- continue to shop around and checkout when you're ready."
// //           );
// //         }
// //       }, []);


// // 	return (
// // 		// <div className='App'>
// // 		// 	<h1>The Spatula Store</h1>
// // 		// 	{showItem ? (
// // 		// 		<StripeContainer />
// // 		// 	) : (
// // 		// 		<>
// // 		// 			<h3>$10.00</h3>
// // 		// 			<img className='spatula' src={spatula} alt='Spatula' />
// // 		// 			<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
// // 		// 		</>
// // 		// 	)}
// // 		// </div>
// //         message ? (
// //             <Message message={message} />
// //           ) : (
// //             <ProductDisplay />
// //           )
// // 	);
// // }

// // export default SpatulaApp;
// import React, { useState, useEffect } from "react";
// // import "./App.css";

// const ProductDisplay = () => (
//     <section>
//         <div className="product">
//             <img
//                 src="https://i.imgur.com/EHyR2nP.png"
//                 alt="The cover of Stubborn Attachments"
//             />
//             <div className="description">
//                 <h3>Stubborn Attachments</h3>
//                 <h5>$20.00</h5>
//             </div>
//         </div>
//         <form
//             onSubmit={checkOutStripe}
//         // action="/api/payment"
//         // method="POST"
//         >
//             <button type="submit">
//                 Checkout
//             </button>
//         </form>
//     </section>
// );

// const checkOutStripe = async (data) => {
//     data.preventDefault()
//     try {
//         const response = await fetch('/api/payment', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify([
//                 {
//                 name: 'test product',
//                 description: 'thingy',
//                 images: ['https://i.imgur.com/EHyR2nP.png'], 
//                 quantity: 4, 
//                 price: 30
//             }, 
//             {
//                 name: 'test product 2',
//                 description: 'thingysss',
//                 images: ['https://i.imgur.com/EHyR2nP.png'], 
//                 quantity: 10, 
//                 price: 25
//             }])
//         })

//         if (response.ok) {
//             const data = await response.json()

//             window.location.replace(data.url);
//             // if(!data.url){

//             // }else{

//             // }
//         }

//     } catch (err) {
//         console.log(err);
//     }
// }

// const Message = ({ message }) => (
//     <section>
//         <p>{message}</p>
//     </section>
// );

// export default function SpatulaApp() {
//     const [message, setMessage] = useState("");

    const affect = () => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            window.location.reload()
        }
    };

//     useEffect(affect, []);

//     return message ? (
//         <Message message={message} />
//     ) : (
//         <ProductDisplay />
//     );
// }