import { useState } from 'react';
import redWhiteLogo from '/logo/redWhiteLogo.png';
import menuBtn from '/buttons/menu.svg';
import closeBtn from '/buttons/close.svg';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <nav>
                <ul>
                    <li><a href="">LOGO</a></li>
                    <li className='hideOnMobile'><a href="">Planes</a></li>
                    <li className='hideOnMobile'><a href="">Sobre nosotros</a></li>
                    <li className='hideOnMobile'><a href="">Socios</a></li>
                    <li>
                        <button onClick={() => setCollapsed(!collapsed)} className='menuBtn'>
                            <img src={menuBtn} Dalt="menu-button" />
                        </button>
                    </li>
                </ul>

                {!collapsed && (
                    <ul className='sidebar'>
                        <li>
                            <div className='sidebarTop'>
                                <img src={redWhiteLogo} alt="sportlife-logo"/>
                                <button onClick={() => setCollapsed(!collapsed)} className='sidebarBtn'>
                                    <img src={closeBtn} alt="close-button" />
                                </button>
                            </div>
                        </li>
                        <li><a href="">LOGO</a></li>
                        <li><a href="">Planes</a></li>
                        <li><a href="">Sobre nosotros</a></li>
                        <li><a href="">Socios</a></li>
                    </ul>
                )}
            </nav>
        </>
    )
}

export default NavBar