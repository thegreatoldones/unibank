export class Message {
  public id: number;
  public author: string;
  public pic: string;
  public title: string;
  public text: string;
  constructor(
    id: number,
    author: string,
    pic: string,
    title: string,
    text: string
  ) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pic = pic;
    this.text = text;
  }
}
