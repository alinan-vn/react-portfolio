import React from 'react';

export default class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            showMenu: false
        }
    }

    toggleMenu = () => {
        const hamburger = document.querySelector('.menu-btn__burger');
        const nav = document.querySelector('.nav');
        const menuNav = document.querySelector('.menu-nav');
        const navItems = document.querySelectorAll('.menu-nav__item');

        if(!this.state.showMenu){
            hamburger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            navItems.forEach(item => item.classList.add('open'));
            
            this.setState({
                showMenu: true
            })
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            navItems.forEach(item => item.classList.remove('open'));
    
            this.setState({
                showMenu: false
            })
        }
    }

    render(){
        return(
            <header>
                <div onClick={this.toggleMenu} className='menu-btn'>
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