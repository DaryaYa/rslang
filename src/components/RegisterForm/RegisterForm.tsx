import React from 'react';
import './RegisterForm.scss'
import { FaUpload } from 'react-icons/fa';

const RegisterForm = () => {
  return (
    <>
      <form className="user-form login-form">
        <h4 className="user-form__label">Have an account?</h4>
        <input type="email" placeholder="email" className="user-form__input" />
        <input type="password" placeholder="password" className="user-form__input" />
        <input type="submit" value="Log In" className="user-form__submit" />
      </form>

      <form className="user-form register-form">
        <h4 className="user-form__label">New here?</h4>
        <input type="text" placeholder="name" className="user-form__input" />
        <input type="email" placeholder="email" className="user-form__input" />
        <input type="password" placeholder="password" className="user-form__input" />
        <input type="password" placeholder="repeat password" className="user-form__input" />

        <div className="form-group">
          <input
            className="user-form__input-file"
            type="file"
            id="formFile"
            name="fotosrc"
            accept=".png, .jpg, jpeg"
          />
          <label htmlFor="formFile" className="user-form__label-file">
            <FaUpload />
            <span className="file-name">select your photo</span>
          </label>
        </div>

        <input type="submit" value="Register" className="user-form__submit" />
      </form>
    </>
  )
}

export default RegisterForm
