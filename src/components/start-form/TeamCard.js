import React from 'react'
import { Card, Feed } from 'semantic-ui-react'


// Renders Team props
const TeamCard = ({ teamName, members, points }) => {
    const renderMembers = () => {
        return members.map((member, index) => {
            return <Card.Description key={index}>{member.name}</Card.Description>
        })
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header
                    textAlign={'center'}>{teamName}
                </Card.Header>
                <Card.Meta
                    textAlign={'center'}>
                    {`Points: ${points}`}
                </Card.Meta>
            </Card.Content>
            <Card.Content>
                <Feed size={"small"}>
                    <Feed.Event >
                        <Feed.Content >
                            <Feed.Summary>
                                {renderMembers()}
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card>
    )
}
export default TeamCard