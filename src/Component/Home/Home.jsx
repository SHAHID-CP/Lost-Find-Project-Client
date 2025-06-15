import React from 'react';
import SuccessStories from './SuccessStories';
import Carosel from './Carosel';
import JoinSucces from './JoinSucces';
import LatestContainer from './LatestContainer';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <LatestContainer></LatestContainer>
            <SuccessStories></SuccessStories>
            <JoinSucces></JoinSucces>
        </div>
    );
};

export default Home;