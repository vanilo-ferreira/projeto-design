import "./style.css";
import logo from '../../assets/logo.png';
//import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';

const Topo = () => {

    return (
        <header className="topo-dark">
            <img src={logo} alt="logomarca" />
            <button className="button-dark">
                <img src={iconeSol} alt="icone" />
            </button>
        </header>
    )
};

export default Topo;