import {ReactComponent as GitIcon} from 'Assets/img/gitlogo.svg';
import './styles.css';
function Navbar(){

    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/FriedrichMatheus" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GitIcon />
                        <p className="dsmovie-contact-link">/FriedrichMatheus</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>);
}

export default Navbar;
