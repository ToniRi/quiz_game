
import React from 'react'
import { Field, FieldArray, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import { Button, Form, Grid, Icon } from 'semantic-ui-react'
import FormInput from './FormInput'
import { createTeam } from '../../actions'

import 'semantic-ui-css/semantic.min.css'

// This component provides creating teams. Using redux-form
class CreateTeamForm extends React.Component {

    // Adds team to store
    onSubmit = (formValues, dispatch) => {
        this.props.createTeam(formValues, this.props.form)
        dispatch(reset(
            this.props.form
        ))
    }

     renderFields = (fields) => {
        //
        return fields.map((member, index) => {
            return (
                <Form.Group key={index}>
                    <Field
                        component={FormInput}
                        label="Member Name"
                        name={`${member}.name`} />
                        <Icon name={"trash"}
                        circular
                        color={"red"}
                        onClick={() => fields.remove(index)} />                    
                </Form.Group>
            )
        })
    }

    // Maximum of 5 members in a team
     renderMembers = ({ fields, meta: { error, submitFailed } }) => {
        return (
            <Grid.Column>
                <Grid.Row >
                    <Grid.Column>
                        <Button type="button" onClick={() => fields.length < 5 ? fields.push({}) : false}
                        >
                            Add a Member
                </Button>
                        <Button floated={"right"}
                        primary>
                            Add a team
                    </Button>
                    </Grid.Column>
                </Grid.Row>
                {submitFailed && error && <span>{error}</span>}
                <Grid.Row>
                <Grid.Column >
                    {this.renderFields(fields)}
                </Grid.Column>
                </Grid.Row>
            </Grid.Column>
        )
    }

    render(){
    return (
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="team" component={FormInput} label="Team" />
            <FieldArray
                name="members"
                component={this.renderMembers}
                label="Member" />
        </Form>
    )}
}

const validate = (formValues, props) => {
    const errors = {}
    if (!formValues.team) {
        errors.team = "Enter a name"
    }
    if (!formValues.members || !formValues.members.length) {
        errors.members = { _error: "Must have at least one member" }
    }
    if (formValues.team in props.teams) {
        errors.team = "Team name already in use"
    }
    return errors
}
const formWrapper = reduxForm({
    form: 'gameForm',
    touchOnBlur: false,
    validate
})(CreateTeamForm)

const mapStateToProps = (state) => {
    return { teams: state.teams }
}
export default connect(mapStateToProps, { createTeam })(formWrapper)