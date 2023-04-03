import React from 'react'
import styles from './First.module.css'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <section className={`animLeft ${styles.wrap}`}>
      <p>hello, i am</p>
      <span>andrew</span>
      <Link to="/about"><Arrow className="arrow" /></Link>
    </section>
  )
}

export default First