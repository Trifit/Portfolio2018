import React from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';
import Arrow from '../../uploads/arrow.svg';
// import arrowStyes from '../../uploads/arrow.css';

export default props => {
    // console.log(arrow);
    return (
        <li className={`${styles.separator} ${styles.experience}`}>
            <h4 className={styles.company}><a href={props.experience.website}>{props.experience.company}</a></h4>
            <p className={styles.description}>{props.experience.description}</p>
            <h5>Tecnologies: </h5>
            <ul className={styles.tecnologyList}>
                {props.experience.tools.map((tool, index) =>
                    <li key={index}>
                        <Tecnology key={index} name={tool} />
                    </li>
                )}
            </ul>
            <button>
                <Arrow />
                {/* <img className={arrowStyes.arrowHead} src={arrow} alt="right"/> */}
            </button>
        </li>
    )
}