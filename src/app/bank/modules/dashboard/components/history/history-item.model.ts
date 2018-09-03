export class HistoryItem {
  public id: number;
  public amount: number;
  public currency: string;
  public time: string;
  public status: string;
  public merchant: string;
  public image: string;
  public subject: string;
  public geo: string;
  constructor(
    id: number,
    amount: number,
    currency: string,
    time: string,
    status: string,
    merchant: string,
    image: string,
    subject: string,
    geo: string
  ) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
    this.time = time;
    this.status = status;
    this.merchant = merchant;
    this.image = image;
    this.subject = subject;
    this.geo = geo;
  }
}
