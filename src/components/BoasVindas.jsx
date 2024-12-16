import Button from "./Button";

export default function BoasVindas({nome, email}) {

    return (
        <div className="container-global">
            <h1>Boas-Vindas {nome}</h1>
            <p style={{marginBottom: "20px"}}>Seu email é: {email}</p>
            <Button btnFunction={() => window.location.reload()} text="Recarregar Página" />
        </div>
    )
}