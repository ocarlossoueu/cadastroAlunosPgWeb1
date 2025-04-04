// ---------------------------------------------- 
// | --------- Alunos --------- | ---- RGA ---- |
// | Carlos Armaral de Amarijo  | 202111640038  |
// | Eduardo Santos Dutra       | 202121640030  |
// ----------------------------------------------

"use client";

import { useState } from 'react';

// Optamos por colocar tudo dentro de uma única função geral
export default function Home() {
  const [alunos, setAlunos] = useState([]);
  const [proximoId, setProximoId] = useState(1);

//Aqui setamos alguns nomes para que seleção aleatória dentro das constantes
  const nomes = ['Ana Nascimento', 'Bruno Aquino', 'Carlos Amarijo', 'Danielle Rodrigues', 'Eduardo Santos', 'Maikon Bueno', 'Paula Togo'];
  const cursos = [
    'Engenharia',
    'Ciência da Computação',
    'Administração',
    'Direito',
    'Medicina',
    'Sistemas da Informação',
    'Física'
  ];

  function gerarAluno() {
    const id = proximoId;
    setProximoId(id + 1);
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const curso = cursos[Math.floor(Math.random() * cursos.length)];
    const semestre = Math.floor(Math.random() * 8) + 1;
    const anoIngresso = Math.floor(Math.random() * 10) + 2010;
    return { id, nome, curso, semestre, anoIngresso };
  }

  function botaoAdicionar() {
    const novoAluo = gerarAluno();
    setAlunos([...alunos, novoAluo]);
  }

  //Achamos interessante adicionar mais um botão ao gerador: Limpeza total da tabela, sem precisar dar refresh na página
  function botaoLimpar() {
    setAlunos([]);
    setProximoId(1);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Cadastro de Alunos</h1>
      <div className="flex gap-4 mb-6">
        <button
          onClick={botaoAdicionar}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Adicionar
        </button>
        <button
          onClick={botaoLimpar}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Limpar
        </button>
      </div>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-3 px-5 bg-gray-200 text-gray-600 font-medium text-left">ID</th>
              <th className="py-3 px-5 bg-gray-200 text-gray-600 font-medium text-left">Nome</th>
              <th className="py-3 px-5 bg-gray-200 text-gray-600 font-medium text-left">Curso</th>
              <th className="py-3 px-5 bg-gray-200 text-gray-600 font-medium text-left">Semestre</th>
              <th className="py-3 px-5 bg-gray-200 text-gray-600 font-medium text-left">Ano de Ingresso</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id} className="border-t border-gray-200">
                <td className="py-3 px-5 text-gray-700">{aluno.id}</td>
                <td className="py-3 px-5 text-gray-700">{aluno.nome}</td>
                <td className="py-3 px-5 text-gray-700">{aluno.curso}</td>
                <td className="py-3 px-5 text-gray-700">{aluno.semestre}</td>
                <td className="py-3 px-5 text-gray-700">{aluno.anoIngresso}</td>
              </tr>
            ))}
            {alunos.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  Nenhum aluno cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}