import React from 'react';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstruction from '../PopularInstruction/PopularInstruction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstruction></PopularInstruction>
        </div>
    );
};

export default Home;