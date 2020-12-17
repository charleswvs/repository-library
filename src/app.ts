import "reflect-metadata";
import express from 'express';
import { json } from 'body-parser';
import { createConnection } from "typeorm";
import BooksController from "./controller/booksController";

const app = express();
const port = 3000;

createConnection().then(() => {
  app.use(json());

  const booksController = new BooksController();
  
  app.post('/donateBook', booksController.donateBook);
  app.put('/loanBook', booksController.loanBook);
  app.put('/returnBook', booksController.returnBook);

  app.listen(port, () => {
    console.log( `Server started at http://localhost:${port}` );
  })
})
 
