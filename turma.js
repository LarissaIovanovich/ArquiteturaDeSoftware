class Turma {
    constructor(nota, codigo) {
      this.nota = nota;
      this.codigo = codigo;
    }
  
    aprovado() {
      return this.nota >= 6;
    }
  }
  
  module.exports = Turma;