import "./style.css";

const SecaoExperienciaTrabalho = () => {
    return (
        <section className="secaoExperienciaTrabalho">
            <div className="secaoExperienciaTrabalhoInfo"> 
            <h2>Experiências De Trabalho</h2>
            <p>
                Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital,
                nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
            </p>
            </div>

            <div className="grupoCards"> 
                <div className="card">
                    <p>FEVEREIRO 2019- 2021</p>
                    <h3>Digital Consulting</h3>
                    <p>Arasaka Inc.</p>

                    <p>Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução.</p>
                </div>

                <div className="card">
                    <p>AGOSTO 2016- 2019</p>
                    <h3>Product Designer</h3>
                    <p>E Corp.</p>

                    <p>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra</p>
                </div>

                <div className="card">
                    <p>JUNHO 2012- 2016</p>
                    <h3>Web Designer</h3>
                    <p>Pied Piperr StartUp</p>

                    <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
                </div>
            </div>
        </section>
    );
};

export default SecaoExperienciaTrabalho; 