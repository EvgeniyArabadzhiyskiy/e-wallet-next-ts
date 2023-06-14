export interface User {
  token: string;

  user: {
    email: string;
    firstName: string;
    balance: number;
  };
}
