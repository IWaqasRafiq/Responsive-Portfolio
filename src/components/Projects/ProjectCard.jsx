import React from 'react'
import projects from '../../Data/projects.json'
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(project.imageSrc)} className={styles.image}
                alt={`image of ${project.title}`} />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
                {project.skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>

                <a href={project.demo} className={styles.link}>Live Demo</a>
                <a href={project.source} className={styles.link}>Source Code</a>
            </div>
        </div>
    )
}

export default ProjectCard
