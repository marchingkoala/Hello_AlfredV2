import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Google from './Google';

/**
 * This is the entry point for all of our react stuff
 */
const App = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        alanBtn({
          key: "8a8c89673b8fe90f10f216aa79d578972e956eca572e1d8b807a3e2338fdd0dc/stage",
          onCommand: ({ command, data }) => {
            if (command === "navigate") {
              navigate("google")
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
            <Routes>
                <Route exact path="/google" element = {<Google />} />
            </Routes>
        </div>
    );
};

export default App;