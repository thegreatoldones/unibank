export class Card {
  public id: number;
  public owner: string;
  public card: string;
  public account: string;
  public number: string;
  public expire: string;
  public status: string;
  public image: string;
  constructor(
    id: number,
    owner: string,
    card: string,
    account: string,
    number: string,
    expire: string,
    status: string,
    image: string
  ) {
    this.id = id;
    this.owner = owner;
    this.card = card;
    this.account = account;
    this.number = number;
    this.expire = expire;
    this.status = status;
    this.image = image;
  }
}
