interface BookProps {
  id?: number;
  name: string;
  author: string;
  loan?: boolean;
}

export default class Book {
  id?: number;

  name: string;

  author: string;

  loan: boolean;

  constructor(props: BookProps){
    this.author = props.author;
    this.id = props.id;
    this.loan = props.loan ? props.loan : false;
    this.name = props.name;
  }
}