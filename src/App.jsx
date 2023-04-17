import React from "react";
import * as S from "./assets/components/style";
import NavBar from "./assets/components/NavBar/Navbar";
import Header from "./assets/components/Header/Header";
/* import TravelSection from "./assets/components/TravelSection/TravelSection"; */
import SpaceTest from "./assets/components/SpaceTest";
import Galery from "./assets/components/Galery/Galery";
import Contact from "./assets/components/Contact/Contact";

export default function App(){

  return(
    <>
    <S.GlobalStyle/>
    <NavBar/>
    <Header/>
    {/* <TravelSection/> */}
    <SpaceTest/>
    <Galery/>
    <Contact/>
    </>
  );  
};