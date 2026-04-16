const CHAVE = "tarefas";

export class TarefaService {
  static salvarTodas(tarefas) {
    localStorage.setItem(CHAVE, JSON.stringify(tarefas));
  }

  static buscarTodas() {
    const dados = localStorage.getItem(CHAVE);
    return dados ? JSON.parse(dados) : [];
  }
}