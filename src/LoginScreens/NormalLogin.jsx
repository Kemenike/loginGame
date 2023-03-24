import './NormalLogin.css';
import Showpassword from '../Showpassword.jsx';

import React from 'react'

// TODO: Add functionality to form to check the username and password. 
// TODO: Count the score as they get correct logins without failing. 
// TODO: Use Cookies to store the score. ( Most seniors only use one device. )
// TODO: Switch between other sign-in pages. 


function NormalLogin() {
  return (
    <div className='normal_login__main'>
        <Showpassword userName={`username`} passWord={`password`}/> 
        <img 
        className='normal_login__headphones_img'
        src="https://freesvg.org/img/noun_project_770.png" 
        alt=""
        draggable="false" />
        <div className="normal_login__title_box">
            <h1 className="normal_login__title">
                LimeChime
            </h1>
            <h3 className="normal_login__description">
                The #1 ringtone storefront in the nation!!
            </h3>
        </div>
        <form className="normal_login__form"
            action="">
            <label htmlFor="normal_login__usernamme_input" className='normal_login__label'>Username</label>
            <input className="normal_login__username_input input" type="text"/>
            <label className="normal_login__label password__label" htmlFor="normal_login__password_input">Password</label>
            <input className="normal_login__password_input input" type="password"/>
            <button type="button" className='normal_login__form_submit'>Submit</button>
        </form>
    </div>
  )
}

export default NormalLogin