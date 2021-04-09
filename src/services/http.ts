import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import {
  UserCreateResponseInterface,
  UserLoginRequestInterface,
} from "./../types/user.interface";

const LINK_BACK = "https://darya-rslang.herokuapp.com";

const createUser = async (userData: any) => {
  try {
    const response: AxiosResponse<UserCreateResponseInterface> = await axios.post(
      `${LINK_BACK}/users`,
      userData
    );

    const user = response.data;
    toast.success("Теперь вы можете войти в свой аккаунт");
    return user;
  } catch (err) {
    toast.error("Так аккаунт уже есть");
  }
};

const login = async (userData: UserLoginRequestInterface) => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${LINK_BACK}/signin`,
      userData
    );

    const user = response.data;
    return user;
  } catch (err) {
    return err.response.data;
  }
};

export const http= { createUser, login };
