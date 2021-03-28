import {
  UserCreateRequestInterface,
  UserCreateResponseInterface,
  UserLoginRequestInterface,
} from "./../types/user.interface";
import axios, { AxiosResponse } from "axios";
import { link } from "node:fs";

const LINK_BACK = "http://localhost:5000";

const createUser = async (userData: UserCreateRequestInterface) => {
  try {
    const response: AxiosResponse<UserCreateResponseInterface> = await axios.post(
      `${LINK_BACK}/users`,
      userData
    );

    const user = response.data;
    return user;
  } catch (err) {
    return err.response.data;
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

export default { createUser, login };
