export interface ITransaction {
  amount: number;
  balanceAfterTransaction: string;
  category: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  owner: string;
  timestamps: string;
  typeOperation: string;
  id: string;
}

export interface ITransactions {
  transactions: ITransaction[];
}
