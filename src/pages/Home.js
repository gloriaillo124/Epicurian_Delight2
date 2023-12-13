import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/image.jpg';
import '../styles/Home.css';

function Home(props) {
    return (
        <div className='home'>
            <div className='headerContainer'>
                <h1>Epicurian Delights</h1>
                <p>Better Food , Bette Mood</p>
                <Link to="/menu">
                    <button>clique</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;