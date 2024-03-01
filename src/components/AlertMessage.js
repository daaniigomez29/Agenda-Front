import React, { Component } from 'react';

class AlertMessage extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
                <div className={`container ${this.props.showMessage} alert alert-${this.props.typeAlert}`} role="alert">
                    {this.props.message}
                </div>
         );
    }
}
 
export default AlertMessage;