import React from 'react'
import styles from './About.module.css'
import {ReactComponent as HtmlIcon} from '../../Assets/Images/html.svg'
import {ReactComponent as CssIcon} from '../../Assets/Images/css.svg'
import {ReactComponent as JsIcon} from '../../Assets/Images/js.svg'
import {ReactComponent as ReactIcon} from '../../Assets/Images/react.svg'
import {ReactComponent as FlutterIcon} from '../../Assets/Images/flutter.svg'
import {ReactComponent as Arrow} from '../../Assets/Images/arrow-down.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className={`animLeft ${styles.wrap}`}>
        <p>i’m a front-end developer and UX-UI designer</p>
        <p>I started programming in a technology startup, making websites in html css javascript and applications in ionic. then I started working as a loan providing services to a private marketing agency, where I made many websites using javascript and php, and learned to make applications using flutter. today I work as a service provider using these technologies.</p>
        <div className={styles.skills}>
            <HtmlIcon />
            <CssIcon />
            <JsIcon />
            <ReactIcon />
            <FlutterIcon />
        </div>
        <Link to="/portfolio"><Arrow className="arrow" /></Link>
    </section>
  )
}

export default About