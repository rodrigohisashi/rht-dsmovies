import { ReactComponent as GithubIcon } from 'assets/imgs/icon-github.svg'
import './styles.css'

function Navbar() {
    return (
    <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>RHT - Movies</h1>
                <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/rodrigohisashi</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>);
}

export default Navbar;