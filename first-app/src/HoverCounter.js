import React, { useState } from "react";
import HOCounter from './HOCounter';

const HoverCounter = (props) => {
    const { pageTitle, incrememtButtonTitle, decrememtButtonTitle, count, handleIncrement, handleDecrement } = props;
    return (
        <div>
            <h2>{pageTitle}</h2>
            <h3>Current count is {count}</h3>
            <span><button onMouseOver={handleIncrement}>{incrememtButtonTitle}</button></span>
            <span><button onMouseOver={handleDecrement}>{decrememtButtonTitle}</button></span>
        </div>
    )
}

export default HOCounter(HoverCounter);