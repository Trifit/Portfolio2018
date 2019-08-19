import React from 'react';

export default class Project extends React.Component{
    // constructor(props) {
        // super(props);
        // this.importAll = this.importAll.bind(this);
    // }
    
    renderImages(){
        if(this.props.project.images){
            return <ul>
                {this.props.project.images.map((image, index)=>
                    <li key={index}>
                        <img src={window.location.href + "uploads/" + image} alt={this.props.project.name + " image " + index}/>
                    </li>
                )}
            </ul>
        } else {
            return null;
        }
    }

    renderVideos(){
        if(this.props.project.videos){
            return (
                <ul>
                    {this.props.project.videos.map((video, index)=>
                        <li key={index}>
                            <video controls title={"video-" + index}>
                                <source src={video} type="video/mp4"/>
                            </video>
                        </li>
                    )}
                </ul>
            );
        }else{
            return null;
        }
    }
    
    render() {
        return(
            <li>
                <h4>{this.props.project.name}</h4>
                {this.props.project.clientUrl? 
                    <h5><a href={this.props.project.clientUrl}>{this.props.project.client}</a></h5> : <h5>{this.props.project.client}</h5>
                }
                <p>{this.props.project.description}</p>
                {this.renderImages()}
                {this.renderVideos()}
            </li>
        )
    };
}