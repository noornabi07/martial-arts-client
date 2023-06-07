import React, { useEffect, useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect( () =>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <h2>Classes: {classes.length}</h2>
        </div>
    );
};

export default Classes;