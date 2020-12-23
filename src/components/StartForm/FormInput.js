import React from 'react'

const FormInput =({meta, input,label}) =>{

    // decides the className
    const className = `field ${meta.error && meta.touched ? 'error': ''} ${label === 'Member Name' ? 'column five wide' : ''}`

    return(
       
        <div className={className}>
            <label>{label}</label>
            <input {...input} placeholder={`Enter ${label}`} type="text" />          
        </div>
       
    )
}
export default FormInput