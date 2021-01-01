import React from 'react'
import '../styling.css'

const TeamCard = ({ teamName, members }) => {
//{`${member.name}|`}
    const renderMembers = () => {

        return members.map((member, index) => {
            return <React.Fragment  key={index}>{index === members.length-1 ? `${member.name}`: `${member.name}|`}</React.Fragment>
        })
    }

    return (

        <div className="ui card" style={{backgroundColor: 'transparent'}}>
            <div className="content">
                <div className="header">{teamName}</div>
            </div>
            <div className="content">
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary"style={{overflowWrap:'anywhere'}}>
                                {renderMembers()}
                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}
export default TeamCard