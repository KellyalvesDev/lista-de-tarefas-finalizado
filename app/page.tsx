"use client";

import { useState } from "react";
import NovaTarefa from "@/components/NovaTarefa";
import { tarefasIniciais, Tarefa } from "@/lib/tarefas";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    };

    setTarefas((prev) => [...prev, novaTarefa]);
  }

  const total = useContadorDeTarefas(tarefas);

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <NovaTarefa onAdd={adicionarTarefa} />

      <p>Total de tarefas: {total}</p>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </main>
  );
}
