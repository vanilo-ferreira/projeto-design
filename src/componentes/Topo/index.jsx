import "./style.css";
import logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';

const Topo = () => {
    return (
        <header className="topo">
            <img className="logo" src={logo} alt="logomarca" />
            <button className="buttonTopo">
                <img src={iconeLua} alt="icone"/>
            </button>
        </header>
    )
};

export default Topo;