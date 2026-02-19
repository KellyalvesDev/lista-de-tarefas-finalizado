"use client";

import { useState } from "react";

type Props = {
  onAdd: (titulo: string) => void;
};

export default function NovaTarefa({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Digite uma tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
