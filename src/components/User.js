import React  from "react";

const User = (props) =>{
    const {min, href, src, alt, name} = props;

    return(
        <a href={href} className={min ? "user min" : "user"}>
            <img src={src} alt={alt}/>
            <div>{name}</div>
        </a>
    )
}

export default User;