import React, { useEffect } from 'react';

const Google = () => {

    const openingGoogle = () => {
        window.open("www.google.com")
    }

    useEffect(()=> {
        openingGoogle();
    })
    return (
        <div>
            <h1>TEST</h1>
        </div>
    );
};

export default Google;