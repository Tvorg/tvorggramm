import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
    return(
        <div className="container profile">
            <User
                src="/img/gs_ignat.jpg"
                alt="man"
                name="gs_ignat"/>
            <Palette/>
        </div>
    )
}


export default Profile;