import { useState } from "react";

export default function FiltroDeLista() {
    const [filterInput, setFilterInput] = useState("");
    const nomes = [
        "Ana",
        "João",
        "Maria",
        "Carlos",
        "Bianca",
        "Pedro",
        "Sofia",
        "Lucas",
        "Fernanda",
        "Guilherme",
    ];

    // Filtra a lista de nomes com base no texto digitado no campo de busca
    const nomesFiltrados = nomes.filter((nome) =>
        nome.toLowerCase().includes(filterInput.toLowerCase())
    );

    return (
        <div>
            <h1>Filtro de Lista</h1>
            <input
                type="text"
                value={filterInput}
                placeholder="Digite para buscar"
                onChange={(e) => setFilterInput(e.target.value)}
            />
            <ul>
                {nomesFiltrados.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </div>
    );
}
