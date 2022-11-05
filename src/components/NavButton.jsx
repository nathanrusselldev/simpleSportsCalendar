import { Link } from "react-router-dom";

function NavButton({content, sendTo, onClick}) {
    if (onClick) {
        return (
            <button className={content + ' leagueButton'} onClick={onClick}>
                {content}
            </button>
        )
    }
    return ( 
        <Link className={content + " leagueButton"} to={sendTo}>
            {content}
        </Link> 
    );
}

export default NavButton;