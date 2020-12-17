import Book from "../domain/book";

export default interface IBooksRepo {
  findBookByName: (name: string) => Promise<Book|undefined>;
  findBookById: (id: number) => Promise<Book|undefined>;
  saveBook: (book: Book) => Promise<Book>;
  loanBook: (id: number) => Promise<void>;
  returnBook: (id: number) => Promise<void>;
}