import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div>
            <div className='text-center w-4/12 mx-auto my-8'>
                <p className='text-yellow-500 mb-3'>--- {subheading} ---</p>
                <h2 className='text-4xl font-semibold uppercase border-y-4 py-4'>{heading}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;