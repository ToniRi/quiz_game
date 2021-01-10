import React from 'react'
import { Form } from 'semantic-ui-react'


// Renders inputs for the redux form
const FormInput = ({ meta, input, label }) => {

    const renderError = () => {
        return <div className="ui error message">{meta.error}</div>
    }

    return (
        <React.Fragment>
            <Form.Input {...input}
                placeholder={`Enter ${label}`}
                type={"text"} error={meta.error && meta.touched}
                label="Enter Team Name"
            />
            {meta.error && meta.touched ? renderError() : null}
        </React.Fragment>
    )
}
export default FormInput