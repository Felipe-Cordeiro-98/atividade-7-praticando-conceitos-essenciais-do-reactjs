import { useState, useEffect } from "react";
import Button from "./Button";

export default function Temporizador() {
    const [tempo, setTempo] = useState(0);
    const [rodando, setRodando] = useState(false);

    useEffect(() => {
        if (!rodando) return;

        const time = setInterval(() => {
            setTempo((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(time);
    }, [rodando]);

    function pausar() {
        setRodando(false);
    }

    function continuar() {
        setRodando(true);
    }

    function reiniciar() {
        setTempo(0);
        setRodando(false);
    }

    return (
        <div className="container-global">
            <h1>Temporizador: {tempo}</h1>
            <div className="container-global-buttons">
                <Button btnFunction={continuar} text="Continuar" isAtivo={rodando}/>
                <Button btnFunction={pausar} text="Pausar" isAtivo={!rodando} />
                <Button btnFunction={reiniciar} text="Reiniciar" />
            </div>
        </div>
    );
}
