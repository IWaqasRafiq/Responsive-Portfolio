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
                            <p>I’m a front-end developer with experience
                                in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/serverIcon.png")} />
                        <div className={styles.listItemContent}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and
                                optimised back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} />
                        <div className={styles.listItemContent}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and
                                have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
