import { useState } from "react";
import Button from "./Button";

export default function Contador() {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador((prev) => prev + 1);
    }

    function decrementar() {
        setContador((prev) => (prev <= 0 ? prev : prev - 1));
    }

    return (
        <div className="container-global">
            <h1>Contador: {contador}</h1>

            <div className="container-global-buttons">
                <Button btnFunction={incrementar} text="Incrementar"/>
                <Button btnFunction={decrementar} text="Decrementar"/>
            </div>
        </div>
    );
}
