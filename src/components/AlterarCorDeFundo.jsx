import { useState, useEffect } from "react";
import Button from "./Button";

export default function AlterarCorDeFundo() {
    const [cor, setCor] = useState("rgb(255, 255, 255)");

    useEffect(() => {
        document.body.style.backgroundColor = cor;
        return () => document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }, [cor]);

    function gerarCorAleatoria() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setCor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
        <div
            className="container-global"
            style={{ backgroundColor: "white", borderRadius: "6px" }}
        >
            <h1>
                Cor Atual: {cor}
            </h1>
            <div className="container-global-buttons">
                <Button btnFunction={gerarCorAleatoria} text="Alterar Cor" />
            </div>
        </div>
    );
}
