import "../styles/Button.css";

export default function Button({style, type = "button", btnFunction = () => {}, isAtivo = false, text }) {
    return (
        <button style={style} type={type} onClick={btnFunction} disabled={isAtivo}>
            {text}
        </button>
    );
}