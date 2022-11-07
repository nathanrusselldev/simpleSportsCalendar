import { useState } from "react";
import FutureCard from "./FutureCard";

export default function Scores (props) {
    let dataToFilter = props.props.DATA
    let nbaIndex = 0
    for (let i = 0; i < dataToFilter.length; i++) {
        if (dataToFilter[i].NAME === 'USA: NBA') {
            nbaIndex = i
        }
    }
    let nbaArray = dataToFilter[nbaIndex].EVENTS
    console.log(nbaArray)
    if (props == []) {
        return <div>Loading...</div>
    } else {
        return (
           <div>
            {nbaArray.map((event) => {
                return(
                    <FutureCard 
                    key={event.EVENT_ID}
                    props={event}  />
                )
            })}
           </div>
        )
    }
}