import React, {Component} from 'react';
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom';
import {PlayBackGroundMusic} from '../../audio/PlayBackGroundMusic';

import './navBar.css'

const MenuItems = [
    {
        title: 'Draft',
        url: '/draft',
        cName: 'nav-links'
    },
    {
        title: 'Random Teams',
        url: '/randomHelper',
        cName: 'nav-links'
    },
    {
        title: 'Random Unit',
        url: '/randomRoll',
        cName: 'nav-links'
    },
    {
        title: 'Unit Stats',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: 'The Wheel',
        url: '/wheel',
        cName: 'nav-links'
    },
]

class NavBar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="Navbar">
                <Link to='/' className="menu-icon">
                    MTLGGEZL
                </Link>
                <ul className ='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;