import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact me</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img className={styles.email} src={getImageUrl("contact/emailIcon.png")} alt="" />
                    <a className={styles.email} target='_blank' href="mailto:wm66179@gmail.com">waqasrafiq@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                    <a target='_blank' href="https://www.linkedin.com/in/waqas-rafiq-51b293249/">linkedin.com/waqasrafiq</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                    <a target='_blank' href="https://github.com/iwaqasrafiq">github.com/iwaqasrafiq</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/whatsapp.png")} alt="" />
                    <a target='_blank' href="https://wa.me/923102604311">MuhammadWaqas</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact
