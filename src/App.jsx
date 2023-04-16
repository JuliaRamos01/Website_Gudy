import React from "react";
import * as S from "./assets/components/style";
import NavBar from "./assets/components/NavBar/Navbar";
import Header from "./assets/components/Header/Header";

export default function App(){

  return(
    <>
    <S.GlobalStyle/>
    <NavBar/>
    <Header/>
    </>
  );  
};