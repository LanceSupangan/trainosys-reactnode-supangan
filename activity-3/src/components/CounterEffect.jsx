import React, { useState, useEffect } from 'react';

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Current count: ${count}`);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default CounterEffect