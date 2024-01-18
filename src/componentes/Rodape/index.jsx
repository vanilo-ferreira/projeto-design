import "./style.css";

import Logo from '../../assets/logo.png';
import IconeFacebook from '../../assets/facebook.png';
import IconeTwitter from '../../assets/twitter.png';
import IconeLinkedIn from '../../assets/linkedin.png';
import IconeDribble from '../../assets/dribble.png';
import IconeBehance from '../../assets/behance.png';
import IconeGooglePlus from '../../assets/google-plus.png';

const Rodape = () => {
    return (
        <footer>
            <img src={Logo} alt="logomarca" />
            <p>Ajudamos a criar uma personalidade digital constrindo sua marca no ambiente online utizando estratégias, ferramentas tecnologias personalizadas.</p>

            <div>
                <img src={IconeFacebook} alt="Icone facebook" />
                <img src={IconeTwitter} alt="Icone twitter" />
                <img src={IconeLinkedIn} alt="Icone linkedIn" />
                <img src={IconeDribble} alt="Icone Dribble" />
                <img src={IconeBehance} alt="Icone Behance" />
                <img src={IconeGooglePlus} alt="Icone Google+" />
            </div>

            <p>Copyright 2024 &copy; <span>Vanilo Ferreira</span></p>
        </footer>
    )
};

export default Rodape;