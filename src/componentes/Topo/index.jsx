import "./style.css";
import logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';

const Topo = () => {

    return (
        <header className="topo">
            <img src={logo} alt="logomarca" />
            <button>
                <img src={iconeLua} alt="icone" />
            </button>
        </header>
    )
};

export default Topo;