// Importando as classes do arquivo biblioteca.ts
import { Biblioteca, Livro } from "./biblioteca";

// Criando uma instância da biblioteca
const biblioteca = new Biblioteca();

// Adicionando livros ao acervo
biblioteca.adicionarLivro(new Livro(1, "1984", "George Orwell", true));
biblioteca.adicionarLivro(new Livro(2, "O Senhor dos Anéis", "J.R.R. Tolkien", true));
biblioteca.adicionarLivro(new Livro(3, "Dom Quixote", "Miguel de Cervantes", true));

// Testando a disponibilidade dos livros
console.log(biblioteca.consultarDisponibilidade(1)); // true

// Registrando um empréstimo
biblioteca.registrarEmprestimo(1);
console.log(biblioteca.consultarDisponibilidade(1)); // false

// Tentando registrar o mesmo livro novamente
biblioteca.registrarEmprestimo(1); // "Livro indisponível ou não encontrado."
