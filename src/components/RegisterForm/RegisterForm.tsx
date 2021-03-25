import React from 'react';
import './RegisterForm.scss'

const RegisterForm = () => {
  return (
    <form className="register__form">
      <label className="register__form__label">Have an account?</label>
      <input type="email" placeholder="email" className="register__form__input" />
      <input type="password" placeholder="password" className="register__form__input" />
      <input type="submit" value="Log in" className="register__form__submit" />
      <label className="register__form__label">New here?</label>
      <input type="text" placeholder="name" className="register__form__input" />
      <input type="email" placeholder="email" className="register__form__input" />
      <input type="password" placeholder="password" className="register__form__input" />
      <input type="password" placeholder="repeat password" className="register__form__input" />
      <label htmlFor="formFile" className="register__form__label">Select your photo</label>
      <input
        className="register__form__input"
        type="file"
        id="formFile"
        name="fotosrc"
        accept=".png, .jpg, jpeg"
      />
      <input type="submit" value="Register" className="register__form__submit" />
    </form>
  )
}

export default RegisterForm
