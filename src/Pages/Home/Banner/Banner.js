import React from 'react';
import tutorial from '../../../assets/images/tutorial.jpeg';
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={tutorial} className="rounded-lg w-1/2 shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">React Tutorial News!</h1>
                    <p className="py-6">In this React Tutorial,We are commited to everyone for best trainning from our best.From previous succes histories we are prouded.We wish your bright furure.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get premium access </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;