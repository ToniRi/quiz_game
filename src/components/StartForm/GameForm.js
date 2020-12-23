
import React from 'react'
import { Field, FieldArray, reduxForm, reset } from 'redux-form'

import FormInput from './FormInput'
import { createTeam } from '../../actions'
import { connect } from 'react-redux'

/*
There is still an unwnanted action, when first "add member" is clicked, there is BLUR- event in redux form
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
                    <Field component={FormInput}
                        label="Member Name"
                        name={`${member}.name`} />
                </div>
            )
        })
    }
    const renderMembers = ({ fields }) => {

        return (
            <div>
                <button type="button" onClick={() => fields.push({})}
                    className="ui button">
                    Add a Member
                </button>

                <button className="ui button green"
                    style={{ float: "right" }}>
                    Add a team
                    </button>
                {renderFields(fields)}
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

const validate = (formValues) => {


    const errors = []

    if (!formValues.team) {
        errors.team = "Enter a name"
    }

    return errors
}
const formWrapper = reduxForm({

    form: 'gameForm',
    validate

})(GameForm)

export default connect(null, { createTeam })(formWrapper)