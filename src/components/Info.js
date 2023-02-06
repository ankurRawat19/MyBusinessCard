import React from 'react';
import ankur from '../images/Ankur.jpg';
import email from '../images/Mail.png';
import vector from '../images/Vector.png';

export default function Info() {
    return (
        <div className="info">
            <img src={ankur} alt=""/>
            <h1 className="info--name">Ankur Rawat</h1>
            <h3 className="info--title">Full Stack Web Developer</h3>
            <h4 className="info--website">@ankur-rawat.tech</h4>
            <div className="info--buttons">
                <button>
                    <img
                        className="info--buttons--email"
                        src={email}
                        alt="Email Icon"
                    />Email
                </button>
                <button className="info--buttons--linkedin">
                    <img
                        className="info--buttons--linkedin--icon"
                        src={vector}
                        alt="LinkedIn Icon"
                    />LinkedIn
                </button>
            </div>
        </div>
    );
}
