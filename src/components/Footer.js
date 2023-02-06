import React from 'react';
import twitter from '../images/TwitterIcon.png';
import facebook from '../images/FacebookIcon.png';
import instagram from '../images/InstagramIcon.png';
import github from '../images/GitHubIcon.png';

export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={github} alt="GitHub" />
        </div>
    );
}
