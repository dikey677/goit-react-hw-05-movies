import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navigation() {
    return (
            <nav className='nav'>
                <ul className='nav-list'>
                <li className='nav-item'>
                        <NavLink exact="true" to="/home" className='nav-item__home'>
                            Home
                        </NavLink>
                    </li>
                <li className='nav-item'>
                        <NavLink to="/movies" className='nav-item__movies'>
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}

