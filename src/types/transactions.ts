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
  // userBalance: number;
}

export interface NewTransaction extends ITransaction {
  position: number;
  updatedAt: string;
}

export interface RemoveTransaction extends ITransaction {
  updatedAt: string;
}

export interface ChangedTransaction extends RemoveTransaction {}

export interface IBalance {
  userBalance: number;
}
