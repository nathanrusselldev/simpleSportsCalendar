function NavButton({content, sendTo, onClick}) {
    if (onClick) {
        return (
            <button className={content} onClick={onClick}>
                {content}
            </button>
        )
    }
    return ( 
        <button>
            <a className={content} href={sendTo}>{content}</a>
        </button> 
    );
}

export default NavButton;