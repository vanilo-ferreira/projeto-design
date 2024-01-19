import "./style.css";
import Card from "../Card";

const SecaoExperienciaTrabalho = () => {
    return (
        <section className="secaoExperienciaTrabalho bg-dark">
            <div className="secaoExperienciaTrabalhoInfo">
                <h2 className="color-dark">Experiências De Trabalho</h2>
                <p className="color-dark">
                    Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital,
                    nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>

            <div className="grupoCards">

                <Card
                    periodo="JUNHO 2012- 2016"
                    funcao="Web Designer"
                    empresa="Pied Piperr StartUp"
                    descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />

                <Card
                    periodo="AGOSTO 2016- 2019"
                    funcao="Product Designer"
                    empresa="E Corp."
                    descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />

                <Card
                    periodo="FEVEREIRO 2019- 2021"
                    funcao="Digital Consulting"
                    empresa="Arasaka Inc."
                    descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução."
                />

            </div>
        </section>
    );
};

export default SecaoExperienciaTrabalho; 