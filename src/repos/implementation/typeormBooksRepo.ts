import { getRepository, Repository } from 'typeorm';
import  TypeormBook from '../../database/typeorm/entity/Book';
import Book from '../../domain/book';
import IBooksRepo from '../booksRepo';

export default class BooksRepository implements IBooksRepo {
  private ormRepository: Repository<TypeormBook>;

  constructor() {
    this.ormRepository = getRepository(TypeormBook);
  }

  findBookByName = async (name: string) => {
    return this.ormRepository.findOne({
      name,
    })
  }

  loanBook = async (id: number) => {
    await this.ormRepository.update(id, {
      loan: true
    }).catch(() => {
      throw new Error('Não foi possível emprestar o livro')
    })
  }

  returnBook = async (id: number) => {
    await this.ormRepository.update(id, {
      loan: false,
    }).catch(() => {
      throw new Error('Não foi possível devolver o livro')
    })
  }

  saveBook = async (book: Book) => {
    return this.ormRepository.save(book)
  }

  findBookById = async (id: number) => {
    return this.ormRepository.findOne(id);
  }
}