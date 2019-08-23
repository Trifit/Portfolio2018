import React from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';
import images from '../../images.js';

export default (props) => {
    const description = props.experience.description.replace("\\n","\n");
    console.log(images);

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
                    <ul>
                        {/* {images.map((image,index) => <img src={image.images[0].url} alt="" key={index}/>)} */}
                    </ul>
                </div>
            </section>
        </li>
    )
}