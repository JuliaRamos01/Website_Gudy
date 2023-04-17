import React from "react";
import * as S from "./ContactStyle";

export default function Contact(){
    return(
        <S.ContactContainer>
            <S.ContactForm>
                <h1>Fale conosco</h1>
                <input type="email" placeholder="Diga o seu melhor email"/>
                <input type="text" placeholder="Assunto"/>
                <input type="message" placeholder="Escreva a sua mensagem"/>
                <button>ENVIAR</button>
            </S.ContactForm>
        </S.ContactContainer>
    );
};