const Aluno = require('./aluno.js');
const Turma = require('./turma.js');
const TurmaPresencial = require('./turmaPresencial.js');

// Exemplo de uso das classes
const aluno = new Aluno("Larissa", "2475332", "2475332");
const turma = new Turma(10, "N14");
const turmaPresencial = new TurmaPresencial(10, "N14", 80);

console.log(aluno);
console.log(turma.aprovado());
console.log(turmaPresencial.aprovado());