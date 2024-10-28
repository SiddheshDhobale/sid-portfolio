import React from "react";
import './ExpCard.css'

const ExpCard = ({ item }) => {
    return (
        <div className="work-exp-card">
            <h6>{item.title}</h6>

            <div className="work-duration">

                <span style={{float:'left', fontWeight:'500'}}>Organization: {item.organization}</span>
                <span style={{float:'right'}}> {item.date}</span>
            </div>
            {/* 
            <div className="organization">
                {item.organization}
            </div> */}

            <ul>
                {item.reponsibilities.map((resitem) => (
                    <li key={item}> {resitem}</li>
                ))
                }

            </ul>
        </div>
    )
}

export default ExpCard;