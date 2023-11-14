import React from "react";
const Card = (props) => {
    console.log(props);
    return (
        <div className="card-container">
            <img src={props.photo} alt="baby image" />
            <h3>{props.name}</h3>
            <p className="desc">lskdoj dwididh iuhie</p>
            <p className="price">
                Price:<span>{props.price + 5}</span>
            </p>
        </div>
    );
};
export default Card;