import React from 'react';
import './ForumTopic.css';

class ForumTopic extends React.Component {
    render() {
        return (
            <div className='forumpost col-12 p-5 my-4 rounded'>
                <h4>{this.props.name}</h4>
                <p className='mt-3'>{this.props.text}</p>
            </div>
        );
    }
}

export default ForumTopic;