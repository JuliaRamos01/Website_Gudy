import React from "react";
import * as S from "./GaleryStyle";
import HomemeBebe from "../../images/homemebebe.png";
import PessoasPulando from "../../images/pessoaspulando.png";
import HomemeCao from "../../images/homemecao.png";
import HomemdeOculos from "../../images/homemdeoculos.png";
import MulherdeBike from "../../images/mulherdebike.png";
import GrupodeAmigas from "../../images/grupodeamigas.png";
import CheckpointVector from "../../images/checkpointsvector.png";
import StreetVector from "../../images/streetvector.png";
import CocoVector from "../../images/cocovector.png";
import Restaurant from "../../images/menuvector.png";

export default function Galery() {
    return (
        <S.GalerySection>
            <S.GaleryText>
                <p>Use a hashtag #brasilisverigudi</p>
                <h1>Nosso mural de Experiências</h1>
            </S.GaleryText>
            <S.GaleryImages>
                <img src={HomemeBebe} alt="Homem e Bebe" />
                <img src={PessoasPulando} alt="Pessoas Pulando" />
                <img src={HomemeCao} alt="Homem e Cão" />
                <img src={HomemdeOculos} alt="Homem e Oculos" />
                <img src={MulherdeBike} alt="Mulher de Bike" />
                <img src={GrupodeAmigas} alt="Grupo de Amigas" />
            </S.GaleryImages>
            <S.GaleryCards>
                <S.GaleryCardOne>
                    <img src={CheckpointVector} alt="Checkpoint"/>
                    <p>O melhor do Brasil</p>
                </S.GaleryCardOne>
                <S.GaleryCardTwo>
                    <img src={StreetVector} alt="Street"/>
                    <p>Cidades mais frequentadas</p>
                </S.GaleryCardTwo>
                <S.GaleryCardThree>
                    <img src={CocoVector} alt="Coco"/>
                    <p>Pontos turísticos</p>
                </S.GaleryCardThree>
                <S.GaleryCardFour>
                    <img src={Restaurant} alt="Menu"/>
                    <p>Restaurantes</p>
                </S.GaleryCardFour>
            </S.GaleryCards>
        </S.GalerySection>
    );
};