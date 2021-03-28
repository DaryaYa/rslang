import React, { useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";

import http from "../../services/http";

import "./RegisterForm.scss";
import { UserCreateRequestInterface } from "../../types/user.interface";

interface RegisterFormInterface {
  name: string;
  email: string;
  password: string;
  password1: string;
}

interface LoginFormInterface {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<RegisterFormInterface>();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    errors: errors2,
  } = useForm<LoginFormInterface>();

  const onSubmitLogin = async (data: LoginFormInterface) => {
    const user = await http.login(data);
    console.log(user);
  };

  const onSubmitRegister = async (data: RegisterFormInterface) => {
    const { email, name, password } = data;
    const userData: UserCreateRequestInterface = {
      email,
      name,
      password,
      userPhoto: "",
    };
    const user = await http.createUser(userData);
    console.log(user);
  };

  const reEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <form
        className="user-form login-form"
        onSubmit={handleSubmit2(onSubmitLogin)}
        noValidate
      >
        <h4 className="user-form__label">Have an account?</h4>
        <div className="user-form__group">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="user-form__input"
            ref={register2({ required: true, pattern: reEmail })}
          />
          {errors2.email && errors2.email.type === "required" && (
            <p className="user-form__mistake">Это обязательное поле</p>
          )}

          {errors2.email && errors2.email.type === "pattern" && (
            <p className="user-form__mistake">Введите правильный email</p>
          )}
        </div>
        <div className="user-form__group">
          <input
            type="password"
            placeholder="password"
            className="user-form__input"
            name="password"
            ref={register2({ required: true, minLength: 8 })}
          />
          {errors2.password && errors2.password.type === "required" && (
            <p className="user-form__mistake">Это обязательное поле</p>
          )}
          {errors2.password && errors2.password.type === "minLength" && (
            <p className="user-form__mistake">Минимальная длина 8 символов</p>
          )}
        </div>
        <input type="submit" value="Log In" className="user-form__submit" />
      </form>

      <form
        className="user-form register-form"
        onSubmit={handleSubmit(onSubmitRegister)}
        noValidate
      >
        <h4 className="user-form__label">New here?</h4>
        <div className="user-form__group">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="user-form__input"
            ref={register({ required: true })}
          />
          {errors.name && (
            <p className="user-form__mistake">Это обязательное поле</p>
          )}
        </div>
        <div className="user-form__group">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="user-form__input"
            ref={register({ required: true, pattern: reEmail })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="user-form__mistake">Это обязательное поле</p>
          )}

          {errors.email && errors.email.type === "pattern" && (
            <p className="user-form__mistake">Введите правильный email</p>
          )}
        </div>
        <div className="user-form__group">
          <input
            type="password"
            placeholder="password"
            className="user-form__input"
            name="password"
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="user-form__mistake">Это обязательное поле</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="user-form__mistake">Минимальная длина 8 символов</p>
          )}
        </div>
        <div className="user-form__group">
          <input
            type="password"
            placeholder="repeat password"
            className="user-form__input"
            name="password1"
            ref={register({
              required: true,
              minLength: 8,
              validate: (value) => value === watch("password"),
            })}
          />
          {errors.password1 && errors.password1.type === "required" && (
            <p className="user-form__mistake">Это обязательное поле</p>
          )}
          {errors.password1 && errors.password1.type === "minLength" && (
            <p className="user-form__mistake">Минимальная длина 8 символов</p>
          )}

          {errors.password1 && errors.password1.type === "validate" && (
            <p className="user-form__mistake">Пароли не совпадают</p>
          )}
        </div>

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
  );
};

export default RegisterForm;
