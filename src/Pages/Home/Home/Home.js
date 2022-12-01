import React from 'react';
import Admission from '../Admission/Admission';

import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Faq from '../Faq/Faq';
import LearningCards from '../LearningCards/LearningCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <LearningCards></LearningCards>
            <Admission></Admission>
            <Faq></Faq>
            <Blog></Blog>
        </div>
    );
};

export default Home;