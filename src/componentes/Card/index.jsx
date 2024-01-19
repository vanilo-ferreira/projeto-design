import "./style.css";

const Card = (props) => {
    return (
        <div className="card card-dark">
            <p className="paragrafo-dark">{props.periodo}</p>
            <h3 className="subtitulo-dark">{props.funcao}</h3>
            <p className="paragrafo-dark">{props.empresa}</p>

            <p className="paragrafo-dark">{props.descricao}</p>
        </div>
    )
};

export default Card;