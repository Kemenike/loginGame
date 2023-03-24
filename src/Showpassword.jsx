import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import "./Showpassword.css";

function Showpassword({userName, passWord}) {

    const [menuState, setMenuState] = useState(false);

    function toggleMenu() {
        if (menuState) {
            setMenuState(false);
        } else {
            setMenuState(true);
        }
    }
    return (
        <div className='showpassword__main'>
            {menuState ?
                <div className="showpassword__menu">
                    <FontAwesomeIcon className="closemenu_btn" icon={faX} onClick={toggleMenu}/>
                    <h3 className="username_answer answer">
                        {`Username: ${userName}`}
                    </h3>
                    <h3 className="password_answer answer">
                        {`Password: ${passWord}`}
                    </h3>
                </div>
                : <>
                    <button
                        className="showpassword__button"
                        onClick={toggleMenu}>
                        Show Pwd
                    </button>
                </>
            }
        </div>
    )
}

export default Showpassword