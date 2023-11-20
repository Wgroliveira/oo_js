 // Classe Funcionario
    class Funcionario {
    constructor(nome, setor) {
      this.nome = nome;
      this.setor = setor;
    }
  
    // Método para mudar o setor
    mudarSetor(novoSetor) {
      let setorAntigo = this.setor;
      this.setor = novoSetor;
      console.log(`${this.nome} foi remanejado do setor ${setorAntigo} para o setor ${this.setor}.`);
    }
  }
  
  // Instâncias de objetos
  let funcionario1 = new Funcionario("João", "Vendas");
  let funcionario2 = new Funcionario("Maria", "RH");
  let funcionario3 = new Funcionario("Carlos", "Marketing");
  let funcionario4 = new Funcionario("Ana", "Finanças");
  let funcionario5 = new Funcionario("Pedro", "TI");
  
  // Testando o método mudarSetor
  funcionario1.mudarSetor("Marketing");
  funcionario2.mudarSetor("Finanças");
  funcionario3.mudarSetor("Vendas");
  funcionario4.mudarSetor("TI");
  funcionario5.mudarSetor("RH");

  
  
  

  
  
  