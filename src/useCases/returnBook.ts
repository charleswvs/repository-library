import IBooksRepo from "../repos/booksRepo";

export default class ReturnBook {
  private repository: IBooksRepo;
  
  constructor (repository: IBooksRepo){
    this.repository = repository;
  }

  execute = async (id: number) => {
    const book = await this.repository.findBookById(id);
    
    if(!book){
      throw new Error('Livro não encontrado');
    }

    if(!book.loan){
      throw new Error('Livro não está emprestado, não é possível devolver');
    }

    book.loan = false;

    return this.repository.saveBook(book);
  }
}