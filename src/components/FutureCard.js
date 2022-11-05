import React from "react";
import { Link } from 'react-router-dom';

export default function FutureCard (homeTeam, awayTeam, homeRecord, awayRecord, startTime, date) {
    return (
        <Link className="scoreCard" to="/">
            <div className="teamInfo">
                <div className="teams">
                    <div>
                        {homeTeam}
                    </div>
                    <div>
                        {awayTeam}
                    </div>
                </div>
                <div className="records">
                    <div>
                        {homeRecord}
                    </div>
                    <div>
                        {awayRecord}
                    </div>
                </div>
            </div>
            <div className="dateTime">
                <div>
                    {startTime}
                </div>
                <div>
                    {date}
                </div>
            </div>
            <span className="cardLine"/>
        </Link>
    )
}