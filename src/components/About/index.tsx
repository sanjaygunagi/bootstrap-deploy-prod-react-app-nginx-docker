import React from 'react';
import './about.css';
import './about.scss';

interface AboutProps {
    name: string;
}

const About: React.FC<AboutProps> = ({ name }) => {
    return (
        <div>
            <div>
                <div className='about-container'>
                    <button className='about'>Click</button>
                </div>
            </div>

            <h1 className='heading'>Hello, {name}!</h1>
        </div>
    );
};

export { About };
