import React from 'react';
import '../App.css';


export default class Tecnology extends React.Component{
    render (){ return <li className='tecnology'>
        <img src={this.props.logo} className='logo' alt={this.props.name} />
        <p>{this.props.name}</p>
    </li>;
    }
}