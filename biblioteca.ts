// Classe que representa um Livro na biblioteca
export class Livro {
    constructor(
        public codigo: number, // Identificador único do livro
        public titulo: string, // Título do livro
        public autor: string,  // Autor do livro
        public disponivel: boolean // Indica se o livro está disponível para empréstimo
    ) {}
}

// Classe que gerencia o acervo da biblioteca
export class Biblioteca {
    private acervo: Livro[] = []; // Lista de livros na biblioteca

    // Método para adicionar um livro ao acervo
    public adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    // Método para registrar o empréstimo de um livro, tornando-o indisponível
    public registrarEmprestimo(codigo: number): void {
        const livro = this.acervo.find(livro => livro.codigo === codigo);
        if (livro && livro.disponivel) {
            livro.disponivel = false; // Marca o livro como indisponível
        } else {
            console.error("Livro indisponível ou não encontrado.");
        }
    }

    // Método para verificar se um livro está disponível
    public consultarDisponibilidade(codigo: number): boolean {
        const livro = this.acervo.find(livro => livro.codigo === codigo);
        return livro ? livro.disponivel : false; // Retorna true ou false
    }
}


