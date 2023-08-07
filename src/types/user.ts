export interface User {
  token: string;

  user: {
    email: string;
    firstName: string;
    balance: number;
  };
}

export interface IAuthCredentials {
  email: string | undefined;
  password: string | undefined;
}
