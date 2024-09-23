// src/App.js
import React from 'react';
import Name from './components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';
import product from './components/product'; // adjust path as necessary

const App = () => {
    const firstName = "YourFirstName"; // Change this to your first name or leave it as an empty string

    return (
        <div>
            <h1>Product Details</h1>
            <div className="product-card">
                <Name />
                <Price />
                <Description />
                <Image />
            </div>
            <p>Hello, {firstName ? firstName : "there!"}</p>
            {firstName && <img src={product.image} alt="Product" />}
        </div>
    );
};

export default App;
