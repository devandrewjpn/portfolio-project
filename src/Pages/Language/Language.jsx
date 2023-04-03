import React from 'react'
import styles from './Language.module.css'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'
import { Link } from 'react-router-dom'

const Language = () => {
  return (
    <div className={`animLeft ${styles.wrap}`}>
      Languages
      <Link to="/final"><Arrow className="arrow" /></Link>   
    </div>
  )
}

export default Language