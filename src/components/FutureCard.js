import React from "react";
import { Link } from 'react-router-dom';

export default function FutureCard (homeTeam, awayTeam, homeRecord, awayRecord, startTime, date) {
    return (
        <a className="scoreCard" to="/">
            <div className="teamInfo">
                <div className="teams">
                    <div>
                        City Team
                    </div>
                    <div>
                        Town Crew
                    </div>
                </div>
                <div className="records">
                    <div>
                        1-5
                    </div>
                    <div>
                        4-2
                    </div>
                </div>
            </div>
            <div className="dateTime">
                <div>
                    1:10 PM
                </div>
                <div>
                    3/13
                </div>
            </div>
            <span className="cardLine"/>
        </a>
    )
}