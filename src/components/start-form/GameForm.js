
import React from 'react'
import { Field, FieldArray, reduxForm, reset } from 'redux-form'
import FormInput from './FormInput'
import { createTeam } from '../../actions'
import { connect } from 'react-redux'

/*
-Validation still needs fixing
-There is still an unwnanted action, when first "add member" is clicked, there is BLUR- event in redux form
And the input doesnt show. Second click and so is fine
*/

const GameForm = (props) => {

    const onSubmit = (formValues, dispatch) => {

        props.createTeam(formValues, props.form)
        dispatch(reset(
            props.form
        ))
    }

    const renderFields = (fields) => {

        return fields.map((member, index) => {
            return (
                <div key={index}>
                    <Field
                        component={FormInput}
                        label="Member Name"
                        name={`${member}.name`} />
                </div>
            )
        })
    }

    // Maximum of 5 members in a team
    const renderMembers = ({ fields, meta: { error, submitFailed } }) => {

        return (
            <div className="ui two column grid">
                <div className="row">
                    <div className="column">
                        <button type="button" onClick={() => fields.length < 5 ? fields.push({}) : false}
                            className="ui button">
                            Add a Member
                </button>
                    </div>
                    <div className="column">
                        <button className="ui button green">
                            Add a team
                    </button>
                    </div>
                </div>
                {submitFailed && error && <span>{error}</span>}
                <div className="column">
                    {renderFields(fields)}
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <form className="ui form error"
                onSubmit={props.handleSubmit(onSubmit)}>
                <Field name="team" component={FormInput} label="Team" />
                <div className="row">
                    <div className="column six wide">
                        <FieldArray
                            name="members"
                            component={renderMembers}
                            label="Member" />
                    </div>
                    <div className="column four wide">
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
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

})(GameForm)

const mapStateToProps = (state) => {
    return { teams: state.teams }
}

export default connect(mapStateToProps, { createTeam })(formWrapper)