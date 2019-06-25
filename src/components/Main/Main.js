import React from 'react';
import ForumTopic from "../Forumtopic/ForumTopic";
import Administrative from "../Administrative";
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
    render() {
        return (
            <Container>
                <a href="/householding"><ForumTopic name={"Householding"} text={"Discuss householdings shores, problems and things to buy"}/></a>
                <a href="/administrative"><ForumTopic name={"Administrative"} text={"Discuss administrative problems, VDAB-issues and absences"}/></a>
                <a href="/problems"><ForumTopic name={"Problems"} text={"General topic for problems that dont fit in the other catogeries"}/></a>
            </Container>
        );
    }
}

export default Main;
