import React from 'react';
import Admissions from '../Admission/Admissions';


import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Faq from '../Faq/Faq';
import LearningCards from '../LearningCards/LearningCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <LearningCards></LearningCards>
            <Admissions></Admissions>
            <Faq></Faq>
            <Blog></Blog>
        </div>
    );
};

export default Home;