import FutureCard from "./FutureCard";



export default function Scores (props) {
    // console.log(props.props.DATA[84].EVENTS[0].HOME_NAME)
    if (props == []) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <FutureCard 
                    homeTeam = {props.props.DATA[84].EVENTS[0].HOME_NAME}
                    awayTeam = {props.props.DATA[84].EVENTS[0].AWAY_NAME}
                    homeRecord = '2-6'
                    awayRecord = '7-1'
                    startTime = {props.props.DATA[84].EVENTS[0].START_TIME}
                />
            </div>
        )
    }
}