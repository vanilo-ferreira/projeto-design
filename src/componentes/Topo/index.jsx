import "./style.css";
import logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';



const Topo = (props) => {

    const alterarTema = () => {
        props.setState(!props.state);
    };

    return (
        <header className={props.state ? "topo-dark" : "topo-light"}>
            <img src={logo} alt="logomarca" />
            <button className={props.state ? "button-dark" : "button-light"} onClick={alterarTema}>
                <img src={props.state ? iconeSol : iconeLua} alt="icone" />
            </button>
        </header>
    )
};

export default Topo;