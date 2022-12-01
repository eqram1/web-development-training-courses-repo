
import React from 'react';
import LearningCard from '../LearningCards/LearningCard';
import check from '../../../assets/icons/check.svg';
import quote from '../../../assets/icons/quote.svg';
import group from '../../../assets/icons/group.svg';

const LearningCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'training period',
            description: 'start 8 am to 8 pm in everyday',
            icon: check,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'our locations',
            description: 'banani -Dhaka',
            icon: quote,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'contact number',
            description: '02-9893509',
            icon: group,
            bgClass: 'bg-primary'
        },
    ]

    return (
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <LearningCard>
                    key={card.id}
                    card={card}
                </LearningCard>)

            }
        </div>
    );
};

export default LearningCards;