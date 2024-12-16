import { useState } from "react";
import Button from "./Button";
import "../styles/ListaDeTarefas.css";

export default function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [inputTarefa, setInputTarefa] = useState("");

    function atualizarInput(event) {
        setInputTarefa(event.target.value);
    }

    function adicionarTarefa() {
        if (inputTarefa.trim()) {
            setTarefas([...tarefas, { text: inputTarefa, concluida: false }]);
            setInputTarefa("");
        }
    }

    function deletarTarefa(index) {
        const novasTarefas = tarefas.filter((_, id) => id !== index);
        setTarefas(novasTarefas);
    }

    function isConcluida(index) {
        setTarefas(
            tarefas.map((item, id) =>
                id === index ? { ...item, concluida: !item.concluida } : item
            )
        );
    }

    return (
        <div className="lista-container">
            <div className="lista-container-input">
                <h1>Lista De Tarefas</h1>
                <div>
                    <input
                        type="text"
                        value={inputTarefa}
                        placeholder="Digite sua tarefa"
                        onChange={(e) => atualizarInput(e)}
                    />
                    <Button btnFunction={adicionarTarefa} text="Adicionar" />
                </div>
            </div>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <span
                            style={{
                                textDecoration: item.concluida
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {item.text}
                        </span>
                        <div>
                            <Button
                                btnFunction={() => isConcluida(index)}
                                text={item.concluida ? "Desmarcar" : "Marcar"}
                            />
                            <Button
                                btnFunction={() => deletarTarefa(index)}
                                text="Excluir"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
