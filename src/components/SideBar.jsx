import redWhiteLogo from '/logo/redWhiteLogo.png';
import redWordMark from '/logo/whiteWordMark.png';
import closeBtn from '/buttons/close.svg';

const SideBar = ({ collapsed, setCollapsed }) => {
    return (
        <ul className={`nav__sidebar ${collapsed ? 'nav__sidebar--closed' : 'nav__sidebar--open'}`}>
            <li>
                <div className='nav__sidebar-top'>
                    <img
                        src={redWordMark}
                        className='nav__sidebar-wordmark'
                        alt="logoSportLife"
                    />
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
    );
};

export default SideBar;