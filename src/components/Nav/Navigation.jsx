import "../Nav/Navigation.scss"
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaSearch } from 'react-icons/fa';

const Navigation = () => {
    const navigate = useNavigate()
    const renderTooltip = (props) => (
        <Tooltip {...props}>
            Search Games
        </Tooltip>
    );
    return (
        <>
            <nav class="navMain">
                <div class="navbar-collapse navLinks">
                    <a class="navLogo" href="/">
                        <img src="https://www.nitrogames.com/wp-content/themes/swiss/assets/img/NG-LOGO-W.png" class="d-inline-block align-top" alt="" />
                    </a>
                    <div className="links">
                        <ul class="navbar-nav">
                            <li className="navGameSearch">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <a onClick={() => navigate("/games")} class="navLink"><FaSearch className="searchIcon2"/>Search</a>
                                </OverlayTrigger>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navigation