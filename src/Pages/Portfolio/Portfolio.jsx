import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Portfolio.module.css'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'

const Portfolio = () => {
  return (
    <div className={`animLeft ${styles.wrap}`}>
        Portfolio
        <Link to="/education"><Arrow className="arrow" /></Link>    
    </div>
  )
}

export default Portfolio