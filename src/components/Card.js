import React from 'react';
import styles from '../styles/cardStyle.module.css'
import { Home } from './Home';
import { Comp } from './Comp';
import { Quiz } from './Quiz';
import { Route, Routes } from 'react-router-dom';


  function Card() {
    return (
      <div>
        <div className={styles.card}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/comp' element={<Comp/>}/>
                <Route path='/quiz' element={<Quiz/>}/>
            </Routes>
        </div>
      </div>
    );
  }

  
  export default Card;