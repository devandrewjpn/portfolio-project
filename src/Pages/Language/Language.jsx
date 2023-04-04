import React from 'react'
import styles from './Language.module.css'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'
import { Link } from 'react-router-dom'

const list = [
  "native Brazilian Portuguese",
  "intermediary english",
  "intermediary japanese",
  "spanish basics",
]

const Language = () => {
  return (
    <div className={`animLeft ${styles.wrap}`}>
      <p>languages</p>
      <ul>{list.map((item,index) => <li key={index}>{item}</li>)}</ul>
      <Link to="/final"><Arrow className="arrow" /></Link>   
    </div>
  )
}

export default Language