import "./styles.css";
import { useState } from "react";

const ToDoList = () => {
    const [tarefas, setTarefas] = useState([]);
    const [inputTarefa, setInputTarefa] = useState("");
    const [filtro, setFiltro] = useState("todas");

    // adiciona nova tarefa
    function adicionarTarefa() {
        if (inputTarefa.trim() === "") {
            alert("Digite uma tarefa válida!");
            return;
        }
        // adiciona tarefa e inclui o status
        setTarefas([...tarefas, { texto: inputTarefa, status: false }]);
        setInputTarefa("");
    }

    // exclui tarefa
    function excluirTarefa(index) {
        setTarefas(tarefas.filter((_, i) => i !== index));
    }

    // altera o status para concluido ou não concluido
    function alterarStatus(index) {
        const novasTarefas = tarefas.map((item, i) =>
            i === index ? { ...item, status: !item.status } : item
        );
        setTarefas(novasTarefas);
    }

    // define o novo filtro
    function alterarFiltro(novoFiltro) {
        setFiltro(novoFiltro);
    }

    // filtra as tarefas e retorna uma nova lista
    const tarefasFiltradas = tarefas.filter((item) => {
        if (filtro === "concluida") return item.status === true;
        if (filtro === "naoConcluida") return item.status === false;
        return true; // "todas"
    });

    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className="container-input">
                <input
                    type="text"
                    value={inputTarefa}
                    placeholder="Digite sua tarefa"
                    onChange={(e) => setInputTarefa(e.target.value)}
                />
                <button onClick={adicionarTarefa}>Adicionar</button>
            </div>
            <div className="container-filter">
                <button onClick={() => alterarFiltro("todas")}>Todas</button>
                <button onClick={() => alterarFiltro("concluida")}>
                    Concluídas
                </button>
                <button onClick={() => alterarFiltro("naoConcluida")}>
                    Não Concluídas
                </button>
            </div>
            <div className="container-list">
                <ul className="list">
                    {tarefasFiltradas.map((item, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={item.status}
                                onChange={() => alterarStatus(index)}
                            />
                            {" - "}
                            <span
                                style={{
                                    textDecoration: item.status
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {item.texto}
                            </span>
                            {" - "}
                            <button onClick={() => excluirTarefa(index)}>
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;
