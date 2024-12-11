import styled from "styled-components"
import axios from 'axios';
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '@fontsource/sarala';

export default function Sessao(){
    const {sessaoId} = useParams();
    const [horarios, setHoarios]= useState([]);

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${sessaoId}/showtimes`);
		requisicao.then(resp => {setHoarios(resp.data.days)});
	}, []);
   

    return( 
    <>
        {horarios.map(rsp => (
            <Conatiner key={rsp.id}>
                <StyledDia>{rsp.weekday}, {rsp.date}</StyledDia>
                <Linha/>
                <div>{rsp.showtimes.map(hr => (<Link key={hr.id} to={`/assentos/${hr.id}`}><StyledHorario >{hr.name}</StyledHorario></Link>))}</div>
            </Conatiner> ) 
        )}
    </>);
}

const Conatiner = styled.div`
    height:149px;
    width:338px;
    background-color:#2B2D36;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;
    margin-bottom:23px;
    font-family: Sarala;
    border-radius:8px;

`;

const StyledDia = styled.div`
    height:49px;
    margin-top:13px;
    color:#FFFFFF;
`;

const Linha = styled.div`
    height:1px;
    background-color:#FFFFFF;
    width:302px;
    margin-bottom:19px;

`;
    
const StyledHorario = styled.button`
    height:41px;
    width:84px;
    margin-right:25px;
    color:#EE897F;
    background-color:transparent;
    border: 2px solid #EE897F;
    text-align: center;
    border-radius:4px;
    font-family: Sarala;
    font-size: 16px;
    font-weight: 400;
    line-height: 26.09px;
    letter-spacing: 0.04em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    cursor:pointer;
    &:hover {
        opacity: 0.8;
    }

`;