import React, { useEffect, useState } from 'react';
import InstructorsCard from './InstructorsCard';

const Instructors = () => {
    const [datas, setDatas] = useState([]); 

    useEffect( () =>{
        fetch('intructors.json')
        .then(res => res.json())
        .then(data => setDatas(data));
    }, [])

    return (
        <div className='grid grid-cols-3 gap-5 mt-10 mx-auto'>
            {
                datas.map(data => <InstructorsCard
                    key={data.id}
                    data={data}
                ></InstructorsCard>)
            }
        </div>
    );
};

export default Instructors;