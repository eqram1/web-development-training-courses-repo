import React from 'react';
import html from '../../../assets/images/html.png';
import js from '../../../assets/images/js.png';
import react from '../../../assets/images/react.png';
import Admission from './Admission';

const Admissions = () => {
    const admissionsData = [
        {
            id: 1,
            name: 'html courses',
            description: 'html full courses with new uodate version',
            img: html,
        },
        {
            id: 2,
            name: 'js courses',
            description: 'js full courses with new uodate version',
            img: js,
        },
        {
            id: 1,
            name: 'react courses',
            description: 'react full courses with new uodate version',
            img: react,
        }
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className=' text-4xl text-primary uppercase'>Our Admission Sessioins</h3>
                <h2 className='text-3xl'>Admissions we provide</h2>
            </div>
            <div>
                <Admission
                    key={Admission.id}
                    admission={Admission}
                ></Admission>
            </div>
        </div>
    );
};

export default Admissions;