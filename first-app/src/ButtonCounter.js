import React, { useState } from "react";

const ButtonCounter = (props) => {
    const [count, setCount] = useState(0);
    const { pageTitle, incrememtButtonTitle, decrememtButtonTitle } = props;

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{pageTitle}</h2>
            <h3>Current count is {count}</h3>
            <span><button onClick={handleIncrement}>{incrememtButtonTitle}</button></span>
            <span><button onClick={handleDecrement}>{decrememtButtonTitle}</button></span>
        </div>
    )
}

export default ButtonCounter;