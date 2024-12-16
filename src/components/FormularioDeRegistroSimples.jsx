import { useState } from "react";
import Button from "./Button";
import BoasVindas from "./BoasVindas";
import "../styles/FormularioDeRegistroSimples.css";

export default function FormularioDeRegistroSimples() {
    const [dadosFormulario, setDadosFormulario] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    const [foiEnviado, setFoiEnviado] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setDadosFormulario((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            !dadosFormulario.nome ||
            !dadosFormulario.email ||
            !dadosFormulario.senha
        ) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        setFoiEnviado(true);
    }

    return (
        <div className="container-global">
            {!foiEnviado ? (
                <form className="formulario-form" onSubmit={handleSubmit}>
                    <h1>Formulário</h1>
                    <fieldset>
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            value={dadosFormulario.nome}
                            placeholder="Digite seu nome"
                            onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={dadosFormulario.email}
                            placeholder="Digite seu email"
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="senha"
                            value={dadosFormulario.senha}
                            placeholder="Digite sua senha"
                            onChange={handleChange}
                        />
                    </fieldset>
                    <Button
                        type="submit"
                        isAtivo={
                            !dadosFormulario.nome ||
                            !dadosFormulario.email ||
                            !dadosFormulario.senha
                        }
                        text="Enviar"
                    />
                </form>
            ) : (
                <BoasVindas
                    nome={dadosFormulario.nome}
                    email={dadosFormulario.email}
                />
            )}
        </div>
    );
}
