import { useState } from 'react';
import redWhiteLogo from '/logo/redWhiteLogo.png';
import redWordMark from '/logo/whiteWordMark.png'
import menuBtn from '/buttons/menu.svg';
import closeBtn from '/buttons/close.svg';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={redWordMark} alt="sportlifeLogo" className='navLogo' />
                        </a>
                    </li>
                    <li className='hideOnMobile'><a href="">Planes</a></li>
                    <li className='hideOnMobile'><a href="">Sobre nosotros</a></li>
                    <li className='hideOnMobile'><a href="">Socios</a></li>
                    <li>
                        <button onClick={() => setCollapsed(!collapsed)} className='menuBtn'>
                            <img src={menuBtn} Dalt="menu-button" />
                        </button>
                    </li>
                </ul>

                <ul className={`sidebar ${collapsed ? 'sidebar--closed' : 'sidebar--open'}`}>
                    <li>
                        <div className='sidebarTop'>
                            <img src={redWordMark} alt="logoSportLife" className='sideBarLettersLogo' />
                            <button onClick={() => setCollapsed(!collapsed)} className='sidebarBtn'>
                                <img src={closeBtn} alt="close-button" />
                            </button>
                        </div>
                    </li>
                    <li><a href="">Planes</a></li>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Socios</a></li>
                    <li className='sidebarFooter'>
                        <img src={redWhiteLogo} alt="redWhiteLogo" width={50} />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar