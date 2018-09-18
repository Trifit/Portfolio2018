import React from 'react';
// import styles from './Project.css';
import Test from '../uploads/projects/bcn_project.png';

export default class Project extends React.Component{
    render() {
        return (
            <li>
                <h4>{this.props.project.name}</h4>
                {this.props.project.clientUrl? 
                    <h5><a href={this.props.project.clientUrl}>{this.props.project.client}</a></h5> : <h5>{this.props.project.client}</h5>
                }
                <p>{this.props.project.description}</p>
                <ul>
                    {this.props.project.videos && this.props.project.videos.map((video, index)=>
                        <li key={index}>
                            <video controls title={"video-" + index}>
                                <source src={video} type="video/mp4"/>
                            </video>
                        </li>
                    )}
                </ul>
                <ul>
                    {this.props.project.images && this.props.project.images.map((image, index)=>
                        <li key={index}>
                        <Test/>
                            <img src={"../src/uploads/projects/" + image} alt={this.props.project.name + " image " + index}/>
                        </li>
                    )}
                </ul>
            </li>
        )
    };
}