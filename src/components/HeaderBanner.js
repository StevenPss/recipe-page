import React from 'react'
import HeaderImage from '../static/photo1.png';

function HeaderBanner() {
    return (
        <div className="flex">
            <img className="rounded-lg" src={HeaderImage} alt="banner image"/>
        </div>
    )
}

export default HeaderBanner
