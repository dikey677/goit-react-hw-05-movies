import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-item'><a href="#home" className='nav-item__home'>Home</a></li>
                    <li className='nav-item'><a href="#movies" className='nav-item__movies'>Movies</a></li>
                </ul>
            </nav>
        </header>
    )
}

