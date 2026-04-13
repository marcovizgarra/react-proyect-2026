import { useState } from 'react';
import redWhiteLogo from '/logo/redWhiteLogo.png';
import redWordMark from '/logo/whiteWordMark.png';
import menuBtn from '/buttons/menu.svg';
import closeBtn from '/buttons/close.svg';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <nav className='nav'>
                <ul className='nav__menu'>
                    <li>
                        <a href="#">
                            <img src={redWordMark} alt="sportlifeLogo" className='nav__logo' />
                        </a>
                    </li>
                    <li className='hide-on-mobile'><a href="">Planes</a></li>
                    <li className='hide-on-mobile'><a href="">Sobre nosotros</a></li>
                    <li className='hide-on-mobile'><a href="">Socios</a></li>
                    <li>
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className='nav__menu-btn'
                        >
                            <img src={menuBtn} alt="menu-button" />
                        </button>
                    </li>
                </ul>

                <ul className={`nav__menu nav__sidebar ${collapsed ? 'nav__sidebar--closed' : 'nav__sidebar--open'}`}>
                    <li>
                        <div className='nav__sidebar-top'>
                            <img src={redWordMark} className='nav__sidebar-wordmark' alt="logoSportLife" />
                            <button
                                onClick={() => setCollapsed(!collapsed)}
                                className='nav__sidebar-btn'
                            >
                                <img src={closeBtn} alt="close-button" />
                            </button>
                        </div>
                    </li>
                    <li><a href="">Planes</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Socios</a></li>
                    <li className='nav__sidebar-footer'>
                        <img src={redWhiteLogo} alt="redWhiteLogo" width={50} />
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;