export interface UserCreateRequestInterface {
  name: string;
  email: string;
  password: string;
  userPhoto: string;
}

export interface UserCreateResponseInterface {
  id: string;
  email: string;
  name: string;
  userPhoto: "";
}

export interface UserLoginRequestInterface {
  email: string;
  password: string;
}
