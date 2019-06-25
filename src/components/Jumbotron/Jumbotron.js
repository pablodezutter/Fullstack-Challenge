import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Jumbotron.css';


class JumbotronSimon extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className='jumbo'>
                    <h1>Full Stack Message Board!</h1>
                </Jumbotron>
            </div>
        );
    }
}

export default JumbotronSimon;