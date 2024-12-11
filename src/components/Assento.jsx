import { useState,useEffect } from "react"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import '@fontsource/sarala';
import '@fontsource/roboto';

export default function Assento({ setFilmSelect, setSelectAssento, name, setName, cpf, setCpf}){
  
    const {assentoId} = useParams();

    const navigate =  useNavigate()
    const [assentos, setAssentos] = useState([]);
    const [idselectAssento, setIdSelectAssento] = useState([]);
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${assentoId}/seats`);
		requisicao.then(resp => {
            setAssentos(resp.data.seats);
            setFilmSelect(resp.data)
        
        });
	}, []);

    const Selectionseats= (assentoId, assentoName) => {
        setIdSelectAssento((prevSelected) => 
            prevSelected.includes(assentoId)
              ? prevSelected.filter((id) => id !== assentoId) 
              : [...prevSelected, assentoId] 
          );
          setSelectAssento((prevSelected) => 
          prevSelected.includes(assentoName)
            ? prevSelected.filter((name) => name !== assentoName) 
            : [...prevSelected, assentoName] 
        );
        
    }
    function resevarAssento(){
        event.preventDefault()
        if (idselectAssento.length!==0 && name!=="" && cpf.length===11){
           const dados = {
                ids: idselectAssento,
                name: name,
                cpf: cpf
            };
            const requisicao =axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", dados);
            requisicao.then(navigate("/sucesso"));
        }else{alert("Preencha todos os campos corretamente");}

    }

    return(

        <Container>
            <StyledNumAssentos>
                {assentos.map((assento) => (
                    
                    <StyledLabel key={assento.id}
                        color={assento.isAvailable}
                        colorselect = {idselectAssento.includes(assento.id)}
                        onClick={() => {
                            if (assento.isAvailable) {
                                Selectionseats(assento.id, assento.name);
                            }else{
                                alert("Esse assento não está disponível");
                            }
                        }}
                    >
                        {assento.name}
                    </StyledLabel>
                ))}
            </StyledNumAssentos>
            <Linha></Linha>
            <form onSubmit={resevarAssento}>
                <StyledForm>
                        <Name htmlFor="name">Nome do comprador(a)</Name>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            placeholder="  Digite seu nome..."
                            onChange={e => setName(e.target.value)}
                        
                        />
                </StyledForm>

                <StyledForm>
                        <Name htmlFor="CPF">CPF do comprador(a)</Name>
                        <input
                            id="CPF"
                            type="text"
                            value={cpf}
                            placeholder="  Digite seu CPF..."
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value) && value.length <= 11) {
                                  setCpf(value);
                                }
                              }}
                        />
                </StyledForm>
                <SubmitButon type="submit">Reservar assento(s)</SubmitButon>
            </form>

        </Container>      

    )
};

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:20px;

`;

const StyledNumAssentos =styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:7px;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.89px;
    letter-spacing: 0.04em;
    text-align: center;

`;

const StyledLabel = styled.div`
    background-color : ${(props => props.colorselect ? "#FADBC5" : props.color ? "#9DB899" :"#2B2D36" )};
    width: 26px;
    height: 26px;
    gap: 0px;
    border-radius: 12px ;
    border: 2px solid;
    border-color : ${(props => props.colorselect ? "#EE897F" : props.color ? "#9DB899" :"#2B2D36" )};
    opacity: 0px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#2B2D36;
    cursor: pointer;

`;

const Linha = styled.div`
    height:1px;
    background-color:#FFFFFF;
    width:95%;
    margin-bottom:19px;
    margin: 38px 38px;
`;

const StyledForm = styled.div`
    display:flex;
    flex-direction:column;
    width:327px;
    input {
        width: 338px;
        height: 40px;      
        border-radius: 8px;
        border: 1px;
        margin-bottom:11px;
        font-family: Roboto;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        line-height: 18.75px;
        text-align: left;
    }

`;

const Name = styled.label`
    height:25px;
    color:#FFFFFF;
    font-family: Sarala;
   
    font-size: 16px;
    font-weight: 400;
    line-height: 26.09px;
    text-align: left;
`;

const SubmitButon = styled.button`
    width: 338px;
    height: 42px;
    top: 590px;
    left: 20px;
    border-radius: 8px;
    border:none;
    margin-top:26px;
    background-color:#EE897F;
    color:#2B2D36;
    font-family: Sarala;
    font-size: 18px;
    font-weight: 700;
    line-height: 29.35px;
    text-align: center;
    cursor:pointer;

`;