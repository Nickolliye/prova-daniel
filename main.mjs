import { TarefaController } from "./controller/TarefaController.mjs";

const input = document.getElementById("descricao");
const btn = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

function renderizar() {
  lista.innerHTML = "";

  const tarefas = TarefaController.listarTarefas();

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");

    li.textContent = tarefa.descricao;
    if (tarefa.concluida) {
      li.style.textDecoration = "line-through";
    }

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.onclick = () => {
      TarefaController.alternarConclusao(tarefa.id);
      renderizar();
    };

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = () => {
      TarefaController.removerTarefa(tarefa.id);
      renderizar();
    };

    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);

    lista.appendChild(li);
  });
}

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    TarefaController.adicionarTarefa(input.value);
    input.value = "";
    renderizar();
  }
});

renderizar();