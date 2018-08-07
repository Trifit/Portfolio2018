import React, { Component } from 'react';
import Tecnology from '../Tecnology/Tecnology';
import ReactLogo from '../logo.svg';
import WebpackLogo from '../webpack.svg';
import './Experience.css';

export default class Experience extends Component{
    
    constructor(props){
        super(props);
        this.state = { company : {}};
    }
    render(){
        return (
            <article>
                <h3>Company Name</h3>
                <ul>
                    <Tecnology logo={ReactLogo} name='React' />
                    <Tecnology logo={WebpackLogo} name='Webpack' />
                </ul>
            </article>
        );
    }
}