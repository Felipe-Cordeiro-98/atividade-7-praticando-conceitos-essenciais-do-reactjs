import "./styles.css";
import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);

    return (
        <div className="container">
            <h1>Contador: {contador}</h1>

            <div className="container-btns">
                {/* ao clicar incrementa o contador em 1 */}
                <button onClick={() => setContador((prev) => prev + 1)}>Incrementar</button>
                {/* ao clicar decrementa o contador em 1 e verifica se o número não e menor ou igual a zero */}
                <button onClick={() => setContador((prev) => prev <= 0 ? prev : prev - 1)}>Decrementar</button>
            </div>
        </div>
    )
}

export default Contador;