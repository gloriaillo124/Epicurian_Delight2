import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/home.png';
import '../styles/Home.css';

function Home(props) {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
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