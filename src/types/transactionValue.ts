export interface ITransactionValue<TAmount = string> {
  comment: string;
  amount: TAmount;
  category: string;
  date: string;
}

export interface ITransactionData extends ITransactionValue {
  typeOperation: string;
}
