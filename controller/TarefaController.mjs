import { Tarefa } from "../model/Tarefa.mjs";
import { TarefaService } from "../service/TarefaService.mjs";

export class TarefaController {
  static adicionarTarefa(descricao) {
    const tarefas = TarefaService.buscarTodas();
    const nova = new Tarefa(descricao);

    tarefas.push(nova);
    TarefaService.salvarTodas(tarefas);
  }

  static listarTarefas() {
    return TarefaService.buscarTodas();
  }

  static atualizarTarefa(id, novosDados) {
    const tarefas = TarefaService.buscarTodas();

    const atualizadas = tarefas.map(t => {
      if (t.id === id) {
        return { ...t, ...novosDados };
      }
      return t;
    });

    TarefaService.salvarTodas(atualizadas);
  }

  static removerTarefa(id) {
    const tarefas = TarefaService.buscarTodas();
    const filtradas = tarefas.filter(t => t.id !== id);

    TarefaService.salvarTodas(filtradas);
  }

  static alternarConclusao(id) {
    const tarefas = TarefaService.buscarTodas();

    const atualizadas = tarefas.map(t => {
      if (t.id === id) {
        t.concluida = !t.concluida;
      }
      return t;
    });

    TarefaService.salvarTodas(atualizadas);
  }
}