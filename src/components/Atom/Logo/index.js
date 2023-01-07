import React from 'react'
import "./style.scss"
const Logo = ({ src, title, bgcc, border, ...rest }) => {
    return (
        <div className='container_Logo' style={{ border, backgroundColor: bgcc }} >
            <div className='logo'>
                <img src={src} alt='logo' {...rest}>
                </img>
                <h1>{title}</h1>
            </div>
        </div >
    )
}

export default Logo
