import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './about.module.css'

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")}
                    className={styles.image} alt="About Us" />
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} />
                        <div className={styles.listItemContent}>
                            <h3>Frontend Developer</h3>
                            <p>I’m a front-end developer skilled in building responsive and optimized websites using modern technologies like React and Tailwind CSS. I enjoy turning ideas into clean, user-friendly interfaces.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/serverIcon.png")} />
                        <div className={styles.listItemContent}>
                            <h3>Backend Developer</h3>
                            <p>I’m a backend developer focusing on Node.js and Express, building secure, scalable, and optimized APIs. I enjoy designing server-side logic and connecting applications with databases.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
