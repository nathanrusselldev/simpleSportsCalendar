import React from "react";
import { Link } from 'react-router-dom';
import { getDate } from "../utils/getDate";

export default function FutureCard (props) {
    console.log(props.props.HOME_NAME)
    return (
        <Link className="scoreCard" to="/">
            <div className="teamInfo">
                <div className="teams">
                    <div>
                        {props.props.HOME_NAME}
                    </div>
                    <div>
                        {props.props.AWAY_NAME}
                    </div>
                </div>
                <div className="records">
                    <div>
                       7-1
                    </div>
                    <div>
                     8-1
                    </div>
                </div>
            </div>
            <div className="dateTime">
                <div>
                   {getDate(props.props.START_UTIME)}
                </div>
                <div>
                  
                </div>
            </div>
            <span className="cardLine"/>
        </Link>
    )
}