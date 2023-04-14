import React from "react";
import * as S from "./NavBarStyle";
import LogoNav from "../../images/logonav.png";

export default function NavBar(){
    return(
        <S.NavSection>
            <S.NavLogo>
                <img src={LogoNav} alt="Logo Gudy"/>
            </S.NavLogo>
            <S.NavText>
                <ul>
                    <li>Sobre</li>
                    <li>Benefícios</li>
                    <li>Contato</li>
                </ul>
                <button>Agendar</button>
            </S.NavText>
        </S.NavSection>
    );
};