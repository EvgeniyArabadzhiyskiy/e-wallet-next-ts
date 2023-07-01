export interface ITransaction {
  _id: string;
  owner: string;
  typeOperation: string;
  amount: number;
  category: string;
  comment: string;
  date: string;
  balanceAfterTransaction: string;
  createdAt: string;
  timestamps: number;
}

export interface ITransactions {
  transactions: ITransaction[];
  userBalance: number;
}
