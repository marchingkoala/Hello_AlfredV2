import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {

    useEffect(()=>{
        alanBtn({
          key: "8a8c89673b8fe90f10f216aa79d578972e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: ({ command, data }) => {
            if (command === "navigate") {
              window.open("www.google.com")
            }
            if(command === "weather"){
                console.log('loading weather data')
            }
            if(command === "joke"){
                console.log('loading deveolper joke')
            }
            if(command === "date"){
                console.log(data);
            }
          },
        });
    }, [])

    return (
        <div>
            <h1>How can I help you?</h1>
            <Button variant="contained">Start</Button>
        </div>
    );
};

export default App;