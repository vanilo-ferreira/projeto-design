import "./style.css";

import Banner from "../../assets/banner.png";


const SecaoBanner = () => {
    return (
        <section>
            <div>
                <img src={Banner} alt="Banner" />
            </div>
            <div>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <h2><span>e design digital</span></h2>
            </div>
        </section>
    );
};

export default SecaoBanner; 