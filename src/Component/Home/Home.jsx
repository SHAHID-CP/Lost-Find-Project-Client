import React from 'react';
import SuccessStories from './SuccessStories';
import Carosel from './Carosel';
import JoinSucces from './JoinSucces';
import LatestContainer from './LatestContainer';
import MyCarousel from './MyCarousel';
import LostFoundSections from '../LostFoundItem';

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <LatestContainer></LatestContainer>
            <SuccessStories></SuccessStories>
            <LostFoundSections></LostFoundSections>
        </div>
    );
};

export default Home;