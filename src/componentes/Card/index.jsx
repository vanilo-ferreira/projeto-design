import "./style.css";

const Card = (props) => {
    return (
        <div className={props.state ? "card card-dark" : "card card-light"}>
            <p className={props.state ? "paragrafo-dark" : "paragrafo-light"}>{props.periodo}</p>
            <h3 className={props.state ? "subtitulo-dark" : "subtitulo-light"}>{props.funcao}</h3>
            <p className={props.state ? "paragrafo-dark" : "paragrafo-light"}>{props.empresa}</p>

            <p className={props.state ? "paragrafo-dark" : "paragrafo-light"}>{props.descricao}</p>
        </div>
    )
};

export default Card;