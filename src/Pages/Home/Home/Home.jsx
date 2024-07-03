import React from 'react';
import TopAD from '../TopAD/TopAD';
import News from '../News/News';
import MiddleAD from '../MiddleAD/MiddleAD';
import ImgNews from '../ImgNews/ImgNews';
import ImgNews2 from '../ImgNews2/ImgNews2';
import ForMe from '../ForMe/ForMe';
import Sports from '../Sports/Sports';
import Bangladesh from '../Bangladesh/Bangladesh';
import World from '../World/World';
import Entertainment from '../Entertainment/Entertainment';
import Living from '../Living/Living';

const Home = () => {
    return (
        <div>
            <TopAD></TopAD>
            <News></News>
            <MiddleAD></MiddleAD>
            <ImgNews></ImgNews>
            <ImgNews2></ImgNews2>
            <ForMe></ForMe>
            <Sports></Sports>
            <Bangladesh></Bangladesh>
            <World></World>
            <Entertainment></Entertainment>
            <Living></Living>
        </div>
    );
};

export default Home;