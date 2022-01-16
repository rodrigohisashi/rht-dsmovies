import { ReactComponent as GithubIcon } from 'assets/imgs/icon-github.svg'
import './styles.css'

function Navbar() {
    return (
    <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <a href="/"> <h1>RHT - Movies</h1> </a>
                <a href="https://github.com/rodrigohisashi" target="_blank" rel="noreferrer">
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