import React from 'react'
import './index.css'
import Logo from './components/logo'
import Navigation from './components/navigation'
import Hamburger from './components/hamburger'

const TopBanner = () => {
    return (
        <div className='TopBanner'>
            <Hamburger />
            <Logo />
            <Navigation />
        </div>
    )
}

export default TopBanner