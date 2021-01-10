
import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup, Card, Header, Icon } from 'semantic-ui-react'

import { addPoint, removePoint } from '../../actions'

    // This component provides adding and removing points from team. 

const PointCard = (props) => {
    return (        
        <Card >
            <Header textAlign={'center'}>{props.teams[props.teamName].team}</Header>
            <Card.Content >{props.teams[props.teamName].points}</Card.Content>
            <Card.Content>
                <ButtonGroup size={'large'}>
                    <Button color={'green'}
                        onClick={() => props.addPoint(props.teams[props.teamName])}>
                        <Icon name={'thumbs up'}/>
                            </Button>
                    <Button color={'red'} 
                        onClick={() => props.removePoint(props.teams[props.teamName])}>
                            <Icon name={'thumbs down'}/>
                        </Button>
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}
const mapStateToProps = (state, ownProps) => {

    return {
        teams: state.teams
    }
}
export default connect(mapStateToProps, { addPoint, removePoint })(PointCard)