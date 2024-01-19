import "./style.css";

const Card = (props) => {
    return (
        <div className="card">
            <p>{props.periodo}</p>
            <h3>{props.funcao}</h3>
            <p>{props.empresa}</p>

            <p>{props.descricao}</p>
        </div>
    )
};

export default Card;