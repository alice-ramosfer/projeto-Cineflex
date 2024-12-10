import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Filmes(){
    const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			setFilmes(resposta.data)
		});
	}, []);
    
    return(
        <>

            {filmes.map(rsp => (<LinkImg key={rsp.id} to={`/sessoes/${rsp.id}`}><Imagem src={`${rsp.posterURL}`}></Imagem></LinkImg>))}
        </>
    );

}

const StyledTopo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:78px;
    color:#FFFFFF;
`

const StyledFilmes = styled.li`
    display:flex;
    align-items:center;
    justify-content:center;
    

`
const Imagem = styled.img`
    width: 145px;
    height: 210px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    border-radius:8px;
    object-fit: cover;



`
const LinkImg = styled(Link)``