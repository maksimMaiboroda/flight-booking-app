import React, { useState, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/logo.png';
import MenuIcon from '@assets/images/svg/menu_icon.svg';
import Filter from '@components/Filter/Filter';
import Tabs from '@components/Tabs/Tabs';
import FlightList from '@components/FlightList/FlightList';
import ShowMoreButton from '@components/ShowMoreButton/ShowMoreButton';
import './App.scss';

const menuIconStyles: CSSProperties = {
    width: '30px',
    fill: '#2196F3'
};

const App: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="app">
            <button className="menu-button" onClick={toggleMenu}>
                {!menuOpen ? <MenuIcon style={menuIconStyles} /> : null}
            </button>
            <div
                className="overlay"
                style={{ display: menuOpen ? 'block' : 'none' }}
                onClick={() => setMenuOpen(false)}
            ></div>
            <Link to="/" className="logo-wrapper">
                <div className="logo">
                    <img src={Logo} alt="App logo" loading="lazy" />
                </div>
            </Link>
            <div className="content">
                <Filter
                    menuOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                />
                <div className="main-content">
                    <Tabs />
                    <FlightList />
                    <ShowMoreButton />
                </div>
            </div>
        </div>
    );
};

export default App;
