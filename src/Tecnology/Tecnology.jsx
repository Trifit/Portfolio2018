import React from 'react';
import styles from './Tecnology.css';
// eslint-disable-next-line
import ReactLogo from '../uploads/React-logo.svg';
// eslint-disable-next-line
import BackboneLogo from '../uploads/Backbone-logo.svg';
// eslint-disable-next-line
import WebpackLogo from '../uploads/Webpack-logo.svg';
// eslint-disable-next-line
import TypescriptLogo from '../uploads/Typescript-logo.svg';

export default class Tecnology extends React.Component{
    render (){ 
        console.log(this.props);
        
        
        return (
            <div className={styles.tecnology}>
            <BackboneLogo />
            <p>{this.props.name}</p>
        </div>
        );
    }
}