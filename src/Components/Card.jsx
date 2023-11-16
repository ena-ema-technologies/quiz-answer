import React from 'react';

const Card = ({ img, heading, para }) => {
    return (
        <div className="card w-96 glass mx-2 mt-2">
            <figure><img className='w-20 mt-5' src={img} alt="car!" /></figure>
            <div className="card-body text-center">
                <h2 className=" text-center text-2xl font-bold">{heading}</h2>
                <p>{para}</p>

            </div>
        </div>
    );
};

export default Card;