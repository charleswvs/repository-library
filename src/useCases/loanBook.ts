import IBooksRepo from "../repos/booksRepo";

export default class LoanBook {
  private repository: IBooksRepo;
  
  constructor (repository: IBooksRepo){
    this.repository = repository;
  }

  execute = async (id: number) => {
    const book = await this.repository.findBookById(id);
    
    if(!book){
      throw new Error('Livro não encontrado');
    }

    if(book.loan){
      throw new Error('Livro já está emprestado');
    }

    book.loan = true;

    return this.repository.saveBook(book);
  }
}