import React from 'react';
import './index.css'

interface ProductProps {
    productName: string;
    availability: string;
    price: number;
    image: string;
    category: string
}

const Product: React.FC<ProductProps> = ({ productName, availability, price, image, category }) => {
    return (
        <div className="ProductCardContainer">
            <div className="ProductCard">
                <div className={`ProductCategory ${category}`}>{category}</div>
                <div className="ProductImage">
                    <img src={image} alt="mouse corsair" className="mouse" />
                </div>
                <div className="ProductInfo">
                    <h3>{productName}</h3>
                    <h2 className="ProductPrice">{Math.floor(price)}<small>.{Math.floor((price % 1) * 100)}</small> $</h2>
                    <h3 className={`ProductAvailability ${availability.split(' ').join('')}`}>{availability}</h3>
                </div>
            </div>
        </div>
    );
}

export default Product;
