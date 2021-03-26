import React from 'react';
import './RegisterForm.scss'
import { FaUpload } from 'react-icons/fa';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <h4 className="register-form__label">Have an account?</h4>
      <input type="email" placeholder="email" className="register-form__input" />
      <input type="password" placeholder="password" className="register-form__input" />
      <input type="submit" value="Log in" className="register-form__submit" />
      <h4 className="register-form__label">New here?</h4>
      <input type="text" placeholder="name" className="register-form__input" />
      <input type="email" placeholder="email" className="register-form__input" />
      <input type="password" placeholder="password" className="register-form__input" />
      <input type="password" placeholder="repeat password" className="register-form__input" />

      <div className="form-group">
        <input
          className="register-form__input-file"
          type="file"
          id="formFile"
          name="fotosrc"
          accept=".png, .jpg, jpeg"
        />
        <label htmlFor="formFile" className="register-form__label-file">
          <FaUpload />
          <span className="file-name">select your photo</span>
        </label>
      </div>

      <input type="submit" value="Register" className="register-form__submit" />
    </form>
  )
}

export default RegisterForm
