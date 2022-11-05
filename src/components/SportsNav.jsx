import React from 'react'
import NavButton from './NavButton';
import navInnerContent from './navInnerContent';

export default function Navbar() {
        return (
            <div className="sportsNavDiv">
                <nav id="sportsNavButtons">
                    <NavButton {...navInnerContent.nfl} />
                    <NavButton {...navInnerContent.mlb} />
                    <NavButton {...navInnerContent.nhl} />
                    <NavButton {...navInnerContent.nba} />
                    <NavButton {...navInnerContent.mls} />
                </nav>
            </div>
        )
}