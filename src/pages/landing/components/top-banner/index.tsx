import React from 'react'
import './index.css'
import Logo from './components/logo'
import Navigation from './components/navigation'

const TopBanner = () => {
    return (
        <div className='TopBanner'>
            <Logo />
            <Navigation />
        </div>
    )
}

export default TopBanner