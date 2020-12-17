import Book from "../domain/book";
import IBooksRepo from "../repos/booksRepo";

export default class DonateBook {
  private repository: IBooksRepo;
  
  constructor (repository: IBooksRepo){
    this.repository = repository;
  }

  execute = async (book: Book) => {
    const foundBook = await this.repository.findBookByName(book.name);

    if(foundBook){
      throw new Error('Livro já existe');
    }

    return this.repository.saveBook(book);
  }
}