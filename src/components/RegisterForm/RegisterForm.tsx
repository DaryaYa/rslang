import React, { useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { http } from "../../services/http";

import "./RegisterForm.scss";
import Spinner from "../Spinner/Spinner";

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
  const [selectFile, setSelectFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const loginForm = useRef<HTMLFormElement>(null);
  const registerForm = useRef<HTMLFormElement>(null);

  const changeFileInput = (e: React.FormEvent<HTMLInputElement>) => {
    const fileList = e.currentTarget.files;
    if (fileList) {
      setSelectFile(fileList[0]);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<RegisterFormInterface>();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
 //   watch: watch2,
    errors: errors2,
  } = useForm<LoginFormInterface>();

  const onSubmitLogin = async (data: LoginFormInterface) => {
    setLoading(true);
    const user = await http.login(data);
    console.log(user);
    setLoading(false);
  };

  const onSubmitRegister = async (data: RegisterFormInterface) => {
    setLoading(true);
    const { email, name, password } = data;

    const formData = new FormData();

    if (selectFile) {
      formData.append("imagine", selectFile, selectFile.name);
    }

    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);

    const user = await http.createUser(formData);
    if (user?.id) {
      registerForm.current?.reset();
    }

    setLoading(false);
  };

  const reEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <form
        className="user-form login-form"
        onSubmit={handleSubmit2(onSubmitLogin)}
        noValidate
        ref={loginForm}
      >
        {loading && (
          <div className="user-form__close-form">
            <Spinner classNames="user-form__spinner" />
          </div>
        )}
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
        ref={registerForm}
      >
        {loading && (
          <div className="user-form__close-form">
            <Spinner classNames="user-form__spinner" />
          </div>
        )}
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
            onChange={changeFileInput}
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
