import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://martial-arts-server-noornabi07.vercel.app/allApprovedClass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <SectionTitle subheading="our classes" heading="All Student Learning"></SectionTitle>
            <div className='grid grid-cols-3 gap-5 mt-10 mx-auto'>
                {
                    classes.map(Singleclass => <ClassesCard
                        key={Singleclass.id}
                        Singleclass={Singleclass}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;