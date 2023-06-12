import React from 'react';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstruction from '../PopularInstruction/PopularInstruction';
import Trailer from '../Trailer/Trailer';
import Reviews from '../Reviews/Reviews';
import Program from '../Program/Program';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstruction></PopularInstruction>
            <Trailer></Trailer>
            <Reviews></Reviews>
            <Program></Program>
        </div>
    );
};

export default Home;