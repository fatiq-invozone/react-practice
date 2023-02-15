import React, { useState } from "react";

const HOCounter = (WrappedComponent) => {
    function HOCounter(props){
        const [count, setCount] = useState(0);
        const handleIncrement = () => {
            setCount(count + 1);
        }

        const handleDecrement = () => {
            setCount(count - 1);
        }

        return(
            <WrappedComponent count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} {...props} />
        )
        
    }
    return HOCounter;
}
export default HOCounter;