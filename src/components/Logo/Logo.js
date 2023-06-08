import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt" option={{ max: 55 }} style={{ width: '100px', height: '100px' }}>
                <div className="Tilt-inner pa3">
                    <img style={{ paddingTop: '2px' }} alt='Logo' src={brain} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;