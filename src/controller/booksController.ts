import { Request, Response } from "express";
import Book from "../domain/book";
import IBooksRepo from "../repos/booksRepo";
import BooksRepository from "../repos/implementation/typeormBooksRepo";
import DonateBook from "../useCases/donateNewBook";
import LoanBook from "../useCases/loanBook";
import ReturnBook from "../useCases/returnBook";

export default class BooksController {

  private booksRepository: IBooksRepo;

  constructor(){
    this.booksRepository = new BooksRepository();
  }

  donateBook = (req: Request, res: Response) => {
    const donateBookCase = new DonateBook(this.booksRepository);

    donateBookCase.execute(new Book(req.body))
      .then((bookResponse) => {
        res.json(bookResponse)
      }).catch((err) => {
        res.status(400).send(err.message || "Ocorreu um erro")
      });
  }

  loanBook = (req: Request, res: Response) => {
    const loanbookCase = new LoanBook(this.booksRepository);

    const {id} = req.body;

    loanbookCase.execute(id)
      .then(() => {
        res.json('Livro emprestado com sucesso!')
      }).catch((err) => {
        res.status(400).send(err.message || "Ocorreu um erro")
      });
  }

  returnBook = (req: Request, res: Response) => {
    const returnBookCase = new ReturnBook(this.booksRepository);

    const {id} = req.body;

    returnBookCase.execute(id)
      .then(() => {
        res.json('Livro devolvido com sucesso!')
      }).catch((err) => {
        res.status(400).send(err.message || "Ocorreu um erro")
      });
  }
}