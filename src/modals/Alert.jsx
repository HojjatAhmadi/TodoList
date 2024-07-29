import React, { Component } from 'react';

class Alert extends Component { 
    render() { 
        if(this.props.text === undefined || this.props.type === undefined){
            return (<></>)
        }
        return (
            <div class={`alert alert-${this.props.type} position-fixed d-flex justify-content-center align-items-center`} role="alert" style={{width: 'max-content'}}>
                {this.props.text}
            </div>
        );
    }
}
 
export default Alert;