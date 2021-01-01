import React from 'react'

const FormInput =({meta, input,label}) =>{

    // decides the className
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    const renderError = () =>{

        return <div className="ui error message">{meta.error}</div>
    }
    
    return(
       
        <div className={className}>
            <label>{label}</label>
            <input {...input} placeholder={`Enter ${label}`} type="text" />   
            {meta.error && meta.touched ? renderError() : null}       
        </div>
       
    )
}
export default FormInput