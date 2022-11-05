import React, { useState, useEffect } from 'react'
import NavButton from './NavButton';
import navInnerContent from './navInnerContent';
import axios from 'axios'

export default function Navbar() {

    const [data, setData] = useState([]);
    const [activeLeague, setLeague] = useState('/');
    
    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://flashlive-sports.p.rapidapi.com/v1/events/list',
            params: {locale: 'en_INT', sport_id: '3', indent_days: '0', timezone: '-4'},
            headers: {
              'X-RapidAPI-Key': '8e73259ff3msh23d593f1ac46d7fp167ca1jsn08e2368f54b3',
              'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            setData(response)
            
            // console.log(response.data.DATA[96].NAME_PART_2);
            // console.log(response.data.DATA[96].EVENTS[0].AWAY_NAME);
            // console.log(response.data.DATA[96].EVENTS[0].AWAY_IMAGES);
            // console.log(response.data.DATA[96].EVENTS[0].HOME_NAME);
            // console.log(response.data.DATA[96].EVENTS[0].HOME_IMAGES);
            // console.log(response.data.DATA[96].EVENTS[0].START_TIME);
            
          }).catch(function (error) {
            console.error(error);
          });
    }
    useEffect(() => {
        getData()
    }, []) 

    useEffect(() => {

    })
    console.log(activeLeague)
        return (
            
            <div className="sportsNavDiv">
                <nav id="sportsNavButtons">
                    <NavButton onClick={() => setLeague("/nfl")} {...navInnerContent.nfl} />
                    <NavButton onClick={() => setLeague("/mlb")} {...navInnerContent.mlb} />
                    <NavButton onClick={() => setLeague("/nhl")}{...navInnerContent.nhl} />
                    <NavButton data={data} onClick={() => setLeague("/nba")}{...navInnerContent.nba} />
                    <NavButton onClick={() => setLeague("/mls")}{...navInnerContent.mls} />
                </nav>
                <div className='scheduleRender'>

                </div>
            </div>
        )
}