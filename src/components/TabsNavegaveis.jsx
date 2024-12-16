import { useState } from "react";
import Button from "./Button";

export default function TabsNavegaveis() {
    const [abaAtiva, setAbaAtiva] = useState("sobre");

    const conteudos = {
        sobre: "Esta é a aba Sobre. Aqui você pode adicionar informações sobre o tema.",
        contato: "Esta é a aba Contato. Adicione informações de contato aqui.",
        ajuda: "Esta é a aba Ajuda. Coloque informações de suporte ou perguntas frequentes aqui.",
    };

    const abaAtivaStyle = { opacity: "0.5" };

    return (
        <div className="container-global">
            <h1>Tabs Navegáveis</h1>
            <div className="container-global-buttons">
                <Button
                    style={abaAtiva === "sobre" ? abaAtivaStyle : undefined}
                    btnFunction={() => setAbaAtiva("sobre")}
                    text="Sobre"
                />
                <Button
                    style={abaAtiva === "contato" ? abaAtivaStyle : undefined}
                    btnFunction={() => setAbaAtiva("contato")}
                    text="Contato"
                />
                <Button
                    style={abaAtiva === "ajuda" ? abaAtivaStyle : undefined}
                    btnFunction={() => setAbaAtiva("ajuda")}
                    text="Ajuda"
                />
            </div>
            <div style={{ marginTop: "25px" }}>
                <p>{conteudos[abaAtiva]}</p>
            </div>
        </div>
    );
}
