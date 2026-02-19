import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

jest.mock("@/lib/tarefas", () => ({
  getTarefas: async () => [
    { id: 1, titulo: "Teste" },
  ],
}));

test("renderiza tarefas", async () => {
  const PageComponent = await Page();
  render(PageComponent);

  expect(screen.getByText("Teste")).toBeInTheDocument();
});