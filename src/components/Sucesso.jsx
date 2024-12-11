import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import '@fontsource/sarala';

export default function Sucesso({filmSelect, selectAssento, name, setName, cpf, setCpf}){
    const navigate =  useNavigate()
    function finalizaPedido(){
        event.preventDefault()
        setName("");
        setCpf("");
        navigate("/");

    }
    function formatCPF(cpf) {
        if (!cpf) return "";
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }

    return(
        <>
            '<Container>
                <Ifomacoes>
                    <Titulo>Filme e sessão</Titulo>
                    <Linha></Linha>
                    <Iformacao>
                        <span>{filmSelect.movie.title}</span>
                        <span>{filmSelect.day.weekday} às {filmSelect.name}</span>
                    </Iformacao>
                </Ifomacoes>
                <Ifomacoes>
                    <Titulo>Ingressos</Titulo>
                    <Linha></Linha>
                    <Iformacao>
                        {selectAssento.map(rsp => <span>Assento {rsp}</span>)}
                    </Iformacao>
                </Ifomacoes>
                <Ifomacoes>
                    <Titulo>Comprador(a)</Titulo>
                    <Linha></Linha>
                    <Iformacao>
                        <span>Nome: {name}</span>
                        <span>CPF: {formatCPF(cpf)}</span>
                    </Iformacao>
                </Ifomacoes>


            </Container>
            <form onSubmit={finalizaPedido}><SubmitButon type="submit">Voltar para tela inicial</SubmitButon></form>
        </>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    color:#FFFFFF;
    height:421px;
    background-color:#2B2D36;
    width:338px;
    border-radius:8px;
    gap:19px;
`;
const Ifomacoes =styled.div`
    display:flex;
    flex-direction:column;

`;

const Titulo =styled.div`
    height:45px;
    font-family: Sarala;
    font-size: 22px;
    font-weight: 700;
    line-height: 35.87px;
    letter-spacing: 0.04em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color:#EE897F;

`;

const Iformacao=styled.div`
    display:flex;
    flex-direction:column;
    font-family: Sarala;
    font-size: 20px;
    font-weight: 400;
    line-height: 32.61px;
    letter-spacing: 0.04em;
    text-align: left;


    span{
        flex-wrap:wrap;
    }
`;

const Linha=styled.div`
    height:1px;
    width:90%;
    background-color:#4E5A65;
`;

const SubmitButon = styled.button`
    width: 338px;
    height: 42px;
    top: 590px;
    left: 20px;
    border-radius: 8px;
    margin-top:26px;
    border:none;
    background-color:#EE897F;
    color:#2B2D36;
    font-family: Sarala;
    font-size: 18px;
    font-weight: 700;
    line-height: 29.35px;
    text-align: center;
    cursor:pointer;

`;