import React from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';

export default (props) => {
    const description = props.experience.description.replace("\\n","\n");
    // let image = require.context('../uploads/logos/cxLoyalty-logo.png', true);

        // import(`${props.experience.logo}.png`).then(img =>{
        //     console.log(img);
        // });
    return (
        <li className={styles.separator}>
            <section className={styles.experience}>
                <h4 className={styles.company}><a href={props.experience.website}>{props.experience.company}</a></h4>
                <div>
                    <p className={styles.description}>{props.experience.description}</p>
                    <h5>Tecnologies: </h5>
                    <ul className={styles.tecnologyList}>
                        {props.experience.tools.map((tool, index) =>
                            <li key={index}>
                                <Tecnology key={index} name={tool} />
                            </li>
                        )}
                    </ul>
                    <ul>
                        {/* <img src={image} alt=""/> */}
                        {/* {images.map((image,index) => <img src={image.images[0].url} alt="" key={index}/>)} */}
                    </ul>
                </div>
            </section>
        </li>
    )
}