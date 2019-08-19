import React from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';

export default (props) => {
    let description = props.experience.description.replace("\\n","\n");

    return (
        <li className={styles.separator}>
            <section className={styles.experience}>
                <h4 className={styles.company}><a href={props.experience.website}>{props.experience.company}</a></h4>
                <div>
                    <p className={styles.description}>{description}</p>
                    <h5>Tecnologies: </h5>
                    <ul className={styles.tecnologyList}>
                        {props.experience.tools.map((tool, index) =>
                            <li key={index}>
                                <Tecnology key={index} name={tool} />
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </li>
    )
}