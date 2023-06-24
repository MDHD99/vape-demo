import React from 'react'
import './index.css'

const Navigation = () => {
  return (
    <div className='NavigationMain'>
        <div className="NavigationListWrapper">
            <ul className="NavigationListContainer">
                <li className="NavigationEntry">
                  <a href="" className="NavigationLink">Products</a>
                </li>
                <li className="NavigationEntry">
                  <a href="https://wa.me/96176984148" className="NavigationLink">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation