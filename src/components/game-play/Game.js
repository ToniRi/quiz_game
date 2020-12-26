import React from 'react'
import PointsSection from './PointsSection'
import Question from './Question'

// dummy question
const dummy = {
    question : "Kuka on maailman vaikutusvaltaisin henkilö?",
    alternatives : ['Oprah', 'Donald Trump', 'Bill Gates', 'Vladimir Putin'],
    answer : 'Vladimir Putin'
}

const Game = () =>{

return(
    <div>        
        <PointsSection/>     
        <Question/>

    </div>
)

}
export default Game