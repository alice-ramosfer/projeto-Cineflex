import { BrowserRouter, Routes, Route} from "react-router-dom";
import Filmes from "./Filmes";
import Sessao from "./Sessao";
import Assento from "./Assento";
import Sucesso from "./Sucesso";
import { createGlobalStyle, styled } from "styled-components";
import { useState, } from "react"
import '@fontsource/sarala';
import '@fontsource/raleway';
import logo from "../asserts/logo.png"


export default function Cineflex(){
    
    const [selectAssento, setSelectAssento] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] =useState("")
    const [filmSelect, setFilmSelect]=useState("")
    
    return (
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <Container>
                <BarraSuperior>
                    <img src={logo} alt="logo Cineflex" />  
                    <h1>Cineflex</h1>
                </BarraSuperior>
                <Routes>
                    <Route path="/" element={
                        <StyledFilme>
                            <StyledTitulo>Em cartaz</StyledTitulo>
                            <Filme><Filmes/></Filme>
                        </StyledFilme>} />

                    <Route path="/sessoes/:sessaoId" element={
                         <StyledFilme>
                            <StyledTitulo>Selecione o horário</StyledTitulo>
                            <div><Sessao/></div>
                        </StyledFilme>} />
                    
                    <Route path="/assentos/:assentoId" element={
                        <StyledFilme>
                            <StyledTitulo>Selecione o(s) assento(s)</StyledTitulo>
                            <div><Assento setFilmSelect={setFilmSelect} setSelectAssento={setSelectAssento}  name={name} setName={setName} cpf={cpf} setCpf={setCpf}/></div>
                        </StyledFilme>} />

                    <Route path="/sucesso" element={
                        <StyledFilme>
                            <StyledTituloFinalizado>Pedido finalizado!</StyledTituloFinalizado>
                            <div><Sucesso filmSelect={filmSelect} selectAssento={selectAssento}  name={name} setName={setName} cpf={cpf} setCpf={setCpf}/></div>
                        </StyledFilme>} />
                        
                </Routes>
            </Container>
        </BrowserRouter>
    </>
    );
}

const Container = styled.div`
  background-color:#212226;
  max-width:700px;
  min-height:100vh;
  margin: auto;
  display:flex;
  align-items:center;
  flex-direction:column;
  position:relative;
`;

const BarraSuperior = styled.div`
    min-width:700px;
    height:67px;
    background-color:#EE897F;
    display:flex;
    justify-content:center;
    position:absolute;
    z-index:2;
    top:0;
    position:fixed;
    gap:10px;
    
    h1{
        font-family: Raleway;
        font-size: 34px;
        font-weight: 600;
        line-height: 39.92px;
        color:#FADBC5;
        margin-top:15px

    }

    img {
        width: 40px;
        height: 40px;
        margin-top:11px
    }
`;

const StyledFilme = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top:67px;
    margin-bottom:20px;
    
`;

const Filme =styled.div`    
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    width: 100%;
    margin-left:20px;
    gap: 20px 6px;
    
`;

const StyledTitulo = styled.div`
    height:78px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 24px;
    font-weight: 400;
    line-height: 39.13px;
    text-align: center;
    color:#FFFFFF;
    font-family: Sarala;
`;
const StyledTituloFinalizado = styled.div`
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 24px;
    font-weight: 400;
    line-height: 39.13px;
    text-align: center;
    color:#9DB899;
    font-family: Sarala;

`;

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        overflow-x: hidden;
    }
`;

