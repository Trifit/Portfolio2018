import React from 'react';
// import styles from './Project.css';

export default class Project extends React.Component{
    render() {
        return (
            <li>
                <h4>{this.props.projectName}</h4>
                <h5><a href="{this.props.clientUrl}"> {this.props.client}</a>}</h5>
                <p>{this.props.description}</p>
            </li>
        )
    };
}