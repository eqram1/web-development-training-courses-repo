import React from 'react';

import Banner from '../Banner/Banner';
import LearningCards from '../LearningCards/LearningCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <LearningCards></LearningCards>
        </div>
    );
};

export default Home;