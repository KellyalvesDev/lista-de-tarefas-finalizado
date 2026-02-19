"use client";

import { useState } from "react";
import NovaTarefa from "@/components/NovaTarefa";
import { tarefasIniciais } from "@/lib/tarefas";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

export default function Page() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const adicionarTarefa = (titulo: string) => {
    const nova = {
      id: Date.now(),
      titulo,
    };

    setTarefas([...tarefas, nova]);
  };

  const total = useContadorDeTarefas(tarefas);

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <p>Total: {total}</p>

      <NovaTarefa onAdd={adicionarTarefa} />

      <ul>
       {tarefas.map((t: { id: number; titulo: string }) => (
  <li key={t.id}>{t.titulo}</li>
))}

      </ul>
    </main>
  );
}
