import { Link } from "react-router-dom";

function NavButton({content, sendTo, onClick}) {
    if (onClick) {
        return (
            <Link className={content + ' leagueButton'} onClick={onClick} to={sendTo}>
                {content}
            </Link>
        )
    }
    return ( 
        <Link className={content + " leagueButton"} to={sendTo}>
            {content}
        </Link> 
    );
}

export default NavButton;