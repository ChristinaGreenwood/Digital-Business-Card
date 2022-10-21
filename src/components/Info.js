import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProfileImage() {
    return (
        // photo ame buttons
        <main className="main">
            <img src="src/images/55149110.jpeg" className="profile"></img>
            <div className="name">Christina Greenwood</div>
            <div className="title">Frontend Developer</div>
            <div className="text">Make the world more beautiful</div>
            <div className="main-button">
                <button className="one"><FontAwesomeIcon icon="envelope" /> Email</button>
                <button className="two"><FontAwesomeIcon icon="coffee" /> LinkedIn</button>
            </div>
            {/* https://www.linkedin.com/in/christina-greenwood-20636a157/ */}

        </main>
    )
}

export default ProfileImage;