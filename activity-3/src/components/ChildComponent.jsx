import React, { useContext } from 'react';
import { SharedDataContext } from '../App';

const ChildComponent = () => {
    const { username, theme } = useContext(SharedDataContext);

    return (
        <div className="child-component">
            <h2>Welcome, {username}!</h2>
            <p>Current theme: {theme}</p>
        </div>
    );
};

export default ChildComponent;