import "./style.css";

const SecaoBanner = (props) => {
    return (
        <section className="secaoBanner">
            <div className={props.state ? "imagemBanner imagemBanner-dark" : "imagemBanner imagemBanner-light"}></div>
            <div className="secaoBannerInformacoes">
                <div>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <h2><span className="textoDestaque">e design digital</span></h2>
                </div>
            </div>
        </section>
    );
};

export default SecaoBanner; 