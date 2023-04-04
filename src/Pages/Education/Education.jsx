import React from 'react'
import styles from './Education.module.css'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'
import { Link } from 'react-router-dom'

const list = [
  "Bachelor of Computer Science ( 5 period )",
  "design ux-ui - web development udemy course",
  "complete javascript js6 origamid course",
  "css flexbox - css grid - css animation origamid course",
  "complete web design origamid course",
  "learn flutter and dart cod3er course",
  "the complete flutter bootcamp udemy course",
  "bootstrap 4-5 alura course",
  "computing logic with javascript alura course",
]

const Education = () => {
  return (
    <div className={`animLeft ${styles.wrap}`}>
        <p>education - courses</p>
        <ul>{list.map((item,index) => <li key={index}>{item}</li>)}</ul>
        <Link to="/languages"><Arrow className="arrow" /></Link> 
    </div>
  )
}

export default Education