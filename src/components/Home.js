import React, { useState } from "react";
import styles from '../styles/contentStyle.module.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [startClicked, setstartClicked] = useState(false);
  return (
    <div>
        <div className={styles.content}>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <nav>
            <Link to='/comp'><Button/></Link> 
            </nav>
            </div>
        </div>
  )
}
