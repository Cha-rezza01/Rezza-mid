import profilePicture from '../assets/profile-picture.png';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import '../styles/Header.css';

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} alt="Profile" />
                <h3>Rezza Pontoh</h3>
                <p>Unklab Computer Science Student</p>
                <div className='sosialMedia'>
                    <a href='https://instagram.com' target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ fontSize: '30px', filter: 'grayscale(100%)', margin: '0 10px' }} />
                    </a>
                    <a href='https://tiktok.com' target="_blank" rel="noopener noreferrer">
                        <FaTiktok style={{ fontSize: '30px', filter: 'grayscale(100%)', margin: '0 10px' }} />
                    </a>
                    <a href='https://twitter.com' target="_blank" rel="noopener noreferrer">
                        <FaTwitter style={{ fontSize: '30px', filter: 'grayscale(100%)', margin: '0 10px' }} />
                    </a>
                    <a href='https://facebook.com' target="_blank" rel="noopener noreferrer">
                        <FaFacebook style={{ fontSize: '30px', filter: 'grayscale(100%)', margin: '0 10px' }} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
