import React from 'react'
import './PopUp.css'
const PopUp = ({ closePopUp }) => {
    return (
        <div className='mainPopUp'>
            <button onClick={() => closePopUp(false)} style={{ backgroundColor: 'red', color: 'white', marginLeft: 'inherit' }}>x</button>
            <div className='popUp'>
                Welcome to the Team
            </div>
        </div>

    )
}

export default PopUp
