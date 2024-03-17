const Turma = require('./turma');

class TurmaPresencial extends Turma {
  constructor(nota, codigo, frequencia) {
    super(nota, codigo);
    this.frequencia = frequencia;
  }

  aprovado() {
    return super.aprovado() && this.frequencia >= 75;
  }
}

module.exports = TurmaPresencial;