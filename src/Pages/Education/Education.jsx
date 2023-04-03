import React from 'react'
import styles from './Education.module.css'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div className={`animLeft ${styles.wrap}`}>
        Education
        <Link to="/languages"><Arrow className="arrow" /></Link> 
    </div>
  )
}

export default Education