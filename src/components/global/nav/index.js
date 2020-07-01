import React from 'react';

export default class Nav extends React.Component {

    render(){
        return(
            <header>
                <div className='menu-btn'>
                    <span className='menu-btn__burger' />
                </div>

                <nav className='nav'>
                    <ul className='menu-nav'>
                        <li className='menu-nav__item'>
                            <a href='/' className='menu-nav__link'>
                                Home
                            </a>
                        </li>
                        <li className='menu-nav__item'>
                            <a href='/about' className='menu-nav__link'>
                                About
                            </a>
                        </li>
                        <li className='menu-nav__item'>
                            <a href='/projects' className='menu-nav__link'>
                                Projects
                            </a>
                        </li>
                        <li className='menu-nav__item'>
                            <a href='/contact' className='menu-nav__link'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}