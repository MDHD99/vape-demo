import React, { useState } from 'react'
import './index.css'

const Hamburger = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onSectionPress = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div className="MenuContainer">
            <div className={`${isChecked ? 'fixed' : ''}`} id="menuToggle">
                <input checked={isChecked} onChange={onSectionPress} type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#" onClick={onSectionPress}><li>Products</li></a>
                    <a href="https://wa.me/96176984148"><li>Conatct Us</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger