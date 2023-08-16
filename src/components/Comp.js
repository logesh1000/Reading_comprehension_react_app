import React, { useState, useEffect } from "react";


export const Comp = () => {
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
      const timer = setInterval(() => {
        setSecondsLeft(secondsLeft - 1);
        if (secondsLeft === 1) {
          window.location.href = "/quiz";
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, );
  
    return (
      <div>
        <h2 style={{textAlign: 'right'}}>
          {secondsLeft} seconds left.
        </h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  
}
