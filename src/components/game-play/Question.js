import React from 'react'

const dummy = {
    question : "Kuka on maailman vaikutusvaltaisin henkilö?",
    alternatives : ['Oprah', 'Donald Trump', 'Bill Gates', 'Vladimir Putin'],
    answer : 'Vladimir Putin'
}

const Question = () =>{

    const renderAlts = () =>{

        return dummy.alternatives.map(alt =>{
            return <div>{alt}</div>
        })
    }

    return(
        <div>
            <h2>{dummy.question}</h2>
            <ul>
                {renderAlts()}
            </ul>
        </div>
    )
}
export default Question