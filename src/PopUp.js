import React from 'react'
import './PopUp.css'
const PopUp = ({ closePopUp }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
            <button className='crossbtn' onClick={() => closePopUp(false)} >x</button>
            <div className='popUp'>
                Welcome to the Team
            </div>
            </div>
        </div>
    )
}

export default PopUp
