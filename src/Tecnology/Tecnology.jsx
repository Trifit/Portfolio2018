import React from 'react';
import styles from './Tecnology.css';

export default class Tecnology extends React.Component{
    render (){ return <div className={styles.tecnology}>
        <img src={this.props.logo} className='logo' alt={this.props.name} />
        <p>{this.props.name}</p>
    </div>;
    }
}