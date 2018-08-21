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
        if(this.props.description) {
            this.description = <p>{this.props.description.replace(/\n/g,"</p><p>")}</p>
        };
    }
    
    render(){
        return (
            <li>
                <h4>{this.props.company}</h4>
                <h5>{this.props.title}</h5>
                {this.description}
                <ul className={styles.tecnologyList}>
                    {this.props.tools.map((tool, index) =>
                        <li key={index} className={styles.tecnology}>
                            <Tecnology key={index} name={tool} logo={this.logo(tool)} />
                        </li>
                    )}
                </ul>
            </li>
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