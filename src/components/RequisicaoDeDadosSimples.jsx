import { useState, useEffect } from "react";
import Button from "./Button";

export default function RequisicaoDeDados() {
    const [posts, setPosts] = useState([]);
    const [carregando, setCarregando] = useState(true);

    // Função assíncrona para buscar dados da API
    const fetchDados = async () => {
        setCarregando(true);
        try {
            // Faz a requisição para a API
            const resposta = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const dados = await resposta.json();
            setPosts(dados);
        } catch (erro) {
            console.error("Erro ao carregar os dados:", erro);
        } finally {
            setCarregando(false);
        }
    };

    // useEffect que executa a função de busca de dados assim que o componente é montado
    useEffect(() => {
        fetchDados();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Lista de Posts</h1>
            <Button btnFunction={fetchDados} text="Recarregar Dados" />
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <ul style={{ listStyleType: "none" }}>
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            style={{
                                margin: "10px 0",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        >
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
