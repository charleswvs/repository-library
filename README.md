# repository-library
Esta é a uma simples API de biblioteca tem como objetivo mostrar o uso do Repository Pattern com NodeJs e TypeScript.\
Para executar, clone o projeto, instale as dependências usando `yarn` e execute o projeto com `yarn start:dev`\

### Rotas da aplicação
Doar um livro:\
`POST` em `/donateBook`, com o corpo:
```json
{
	"name": "Dom Casmurro",
	"author": "Machado de Assis"
}
```
Pegar um livro emprestado:\
`PUT` em `/loanBook`, com o corpo:
```json
{
	"id": 1
}
```
Devolver um livro emprestado:\
`PUT` em `/returnBook`, com o corpo:
```json
{
	"id": 1
}
```
