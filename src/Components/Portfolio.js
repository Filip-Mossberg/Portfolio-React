import React from "react";
import ProfilePic from '../Images/ProfileImage.png';
import GitHubData from "./GitHubData";

export default function Portfolio() {
    return(
        <>
        <header>
        <div className="banner">
            <div className="profile-box">
                <img className="profile-picture" src={ProfilePic} />
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/">About</a></li>
                <li className="current-tab"><a href="#">Portfolio</a></li>
                <li><a href="/">CV</a></li>
                <li><a href="/">Images</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <GitHubData />
    </main>
        </>
    )
}