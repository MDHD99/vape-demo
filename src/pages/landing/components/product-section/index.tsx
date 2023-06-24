import React from 'react'
import './index.css'
import Product from './components/product'
import FilterBubble from './components/filter-bubble'

const products = [
    {
        name: "Keep it 100 Juice",
        price: 13.98,
        availability: "Available",
        image: "vape-1.png",
        category: "Liquids"
    },
    {
        name: "The Cousons",
        price: 15.50,
        availability: "Limited Availability",
        image: "vape-2.png",
        category: "Liquids"
    },
    {
        name: "Smok RPM 40",
        price: 27.60,
        availability: "Not Available",
        image: "vape-3.png",
        category: "Hardware"
    },

    {
        name: "Keep it 100 Juice",
        price: 13.98,
        availability: "Available",
        image: "vape-1.png",
        category: "Liquids"
    },
    {
        name: "The Cousons",
        price: 15.50,
        availability: "Limited Availability",
        image: "vape-2.png",
        category: "Liquids"
    },
    {
        name: "Smok RPM 40",
        price: 27.60,
        availability: "Not Available",
        image: "vape-3.png",
        category: "Hardware"
    },
]

interface ProductProps {
    onFilterChange: any;
    currentFilter: string
}

const ProductSection: React.FC<ProductProps> = ({currentFilter, onFilterChange}) => {
    return (
        <div className='ProductSection'>
            <div className="FilterBar">
                <FilterBubble onFilterChange={onFilterChange} name='All' />
                <FilterBubble onFilterChange={onFilterChange} name='Liquids' />
                <FilterBubble onFilterChange={onFilterChange} name='Hardware' />
            </div>
            <div className="ProductSectionInner">
                {products.map((product) => {
                    if (product.category == currentFilter || currentFilter == "All")
                    return <Product
                        image={product.image}
                        price={product.price}
                        availability={product.availability}
                        category={product.category}
                        productName={product.name}
                        />

                })}
            </div>

        </div>
    )
}

export default ProductSection