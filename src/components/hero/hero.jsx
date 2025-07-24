import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './hero.module.css'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Waqas</h1>
                <p className={styles.description}>
                    I’m a full-stack developer with a year
                    of experience using React and NodeJS.
                    Reach out if you’d like to learn more!.
                </p>
                <a className={styles.contact}
                    href="mailto:wm66179@gmail.com">Contact Me</a>
            </div>
            <img className={styles.image}
                src={getImageUrl("hero/heroImage.png")} alt="" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero;
