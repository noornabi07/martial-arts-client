import React, { useEffect, useState } from 'react';
import InstructorsCard from './InstructorsCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const Instructors = () => {
    const [datas, setDatas] = useState([]);
    console.log(datas)

    useEffect(() => {
        fetch('http://localhost:5000/allinstructors')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])

    return (
        <div>
            <SectionTitle subheading="Follow There" heading="Instructors Choice"></SectionTitle>
            <div className='grid grid-cols-3 gap-5 mt-10 mx-auto'>
                {
                    datas.map(data => <InstructorsCard
                        key={data.id}
                        data={data}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;