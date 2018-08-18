import React, { Component } from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';

import BackboneLogo from '../uploads/Backbone-logo.svg';
import ReactLogo from '../uploads/React-logo.svg';
import TypescriptLogo from '../uploads/Typescript-logo.svg';
import WebpackLogo from '../uploads/Webpack-logo.svg';
import AccessibilityLogo from '../uploads/Accessibility-logo.svg';
import GruntLogo from '../uploads/Grunt-logo.svg';
import HTML5Logo from '../uploads/HTML5-logo.svg';
import JsLogo from '../uploads/Javascript-logo.svg';

export default class Experience extends Component{
    constructor(props){
        super(props);
        this.state = "";
    }
    render(){
        return (
            <article>
                <h3>{this.props.company}</h3>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <ul className={styles.tecnologyList}>
                    {this.props.tools.map(tool =>
                        <li className={styles.tecnology}>
                        <Tecnology key={tool} name={tool} logo={this.logo(tool)} />
                        </li>
                    )}
                </ul>
            </article>
        )
    };
    logo(_tool){
        switch (_tool){
            default:
                return '';
            case 'Backbone':  
                return <BackboneLogo />;
            case 'React':
                return <ReactLogo />;
            case 'Typescript':
                return <TypescriptLogo />;
            case 'Webpack':
                return <WebpackLogo />;
            case 'Grunt':
                return <GruntLogo />;
            case 'Accessibility':
                return <AccessibilityLogo />;
            case 'HTML':
                return <HTML5Logo />;
            case 'Javascript':
                return <JsLogo />
        }
    }
} 