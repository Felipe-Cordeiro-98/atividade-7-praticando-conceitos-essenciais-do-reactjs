import { useState, useEffect } from "react";
import Button from "./Button";

export default function TimerComAlerta() {
    const [tempo, setTempo] = useState(0);
    const [rodando, setRodando] = useState(false);
    const [inputTempo, setInputTempo] = useState("");

    // useEffect responsável por decrementar o tempo enquanto o timer está rodando
    useEffect(() => {
        if (!rodando || tempo <= 0) return;

        const intervalo = setInterval(() => {
            setTempo((prevTempo) => prevTempo - 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, [rodando, tempo]);

    // useEffect que verifica quando o tempo chega a 0 para exibir um alerta
    useEffect(() => {
        if (tempo === 0 && rodando) {
            alert("O tempo acabou!");
            setRodando(false);
        }
    }, [tempo, rodando]);

    function iniciarTimer() {
        if (!isNaN(inputTempo) && inputTempo > 0) {
            setTempo(parseInt(inputTempo));
            setRodando(true);
            setInputTempo("");
        }
    }

    function pausarTimer() {
        setRodando(false);
    }

    function reiniciarTimer() {
        setRodando(false);
        setTempo(0);
        setInputTempo("");
    }

    return (
        <div className="container-global">
            <h1>Timer com Alerta</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="number"
                    value={inputTempo}
                    onChange={(e) => setInputTempo(e.target.value)}
                    placeholder="Digite o tempo em segundos"
                    style={{
                        width: "250px",
                        fontSize: "16px",
                    }}
                />
                <Button
                    btnFunction={iniciarTimer}
                    isAtivo={rodando}
                    text="Iniciar"
                />
            </div>
            <h2>
                {tempo > 0 ? `${tempo} segundos restantes` : "Defina o tempo"}
            </h2>
            <div className="container-global-buttons">
                <Button
                    btnFunction={pausarTimer}
                    isAtivo={!rodando}
                    text="Pausar"
                />
                <Button btnFunction={reiniciarTimer} text="Reiniciar" />
            </div>
        </div>
    );
}
