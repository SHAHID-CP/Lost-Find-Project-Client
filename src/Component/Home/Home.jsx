import React from 'react';
import SuccessStories from './SuccessStories';
import LatestContainer from './LatestContainer';
import MyCarousel from './MyCarousel';
import LostFoundSections from '../LostFoundItem';
import SafetyTipsSection from './Safty';

const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <LatestContainer></LatestContainer>
            <SafetyTipsSection></SafetyTipsSection>
            <LostFoundSections></LostFoundSections>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;