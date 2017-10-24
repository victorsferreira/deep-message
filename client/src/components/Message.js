import React, { Component } from 'react';

import moment from 'moment';

class Message extends Component {
    componentDidMount(){

    }

    render() {
        return (
            <div className="Message">
                <div>{moment(this.props.datetime).format('DD/MM/YYYY [at] hh:mm')}</div>
                <div>{this.props.message}</div>
            </div>
        );
    }
}

export default Message;
