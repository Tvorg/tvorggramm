import React from "react";
import img from "../loading.png";

const LoadingMessage = () => {
    return(
        <div><img src={img} alt ="loading" className="Loading_photo"/>
            <p className="Loading_text">Loading components, please waite!</p>
        </div>
    )
}

export default LoadingMessage;