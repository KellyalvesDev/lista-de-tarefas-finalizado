import { Tarefa } from "@/lib/tarefas";

export default function useContadorDeTarefas(tarefas: Tarefa[]) {
  return tarefas.length;
}
