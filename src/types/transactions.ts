export interface ITransaction {
  amount: number;
  balanceAfterTransaction: string;
  category: string;
  comment: string;
  createdAt: string;
  date: string;
  owner: string;
  timestamps: number;
  typeOperation: string;
  _id: string;
}

export interface ITransactions {
  transactions: ITransaction[];
  userBalance: number;
}

export interface NewTransaction extends ITransaction {
  position: number;
  updatedAt: string;
}
