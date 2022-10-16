import { useNavigate, useLocation } from 'react-router-dom';

import Header from "../../components/header";
import Logout from "../../components/logout";
import { DetailDiv, MainDiv, LogoDiv, DataDiv, BtnDiv } from "./styles";

const Report = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    
    const buyReport = (id) => {
        try {
            navigate("/sale", {
                state: {
                    reportId: id
                }
            });
            } catch (err) {
            console.log(err);
            }
    };

    return (
        <div className="app">
            <Logout />
            <Header />
            <h3 className="App-subtittle">Detalhes do Relatório</h3>
            <MainDiv>
                <DetailDiv>
                    <LogoDiv style={{background: "url(data:image/jpeg;base64,"+state.reportSelect.imgCompany+")", backgroundSize: "100%"}}/>
                    <DataDiv>
                        <p className="Report-tittle">{state.reportSelect.tittle}</p>
                        <p className="Report-subtittle2">Analista: {state.reportSelect.authorName}</p>
                        <p className="Report-subtittle2">Empresa: {state.reportSelect.nameCompany}</p>
                        <p className="Report-subtittle2">Data: {state.reportSelect.releaseDate}</p>
                        <p className="Report-price">Valor: {state.reportSelect.price}</p>
                    </DataDiv>   
                </DetailDiv>
                <BtnDiv>
                    <button className='btn-submit' onClick= {(e) => buyReport(state.reportSelect.id)}>Comprar</button>
                    <a onClick={() => navigate(-1)}>Voltar</a>
                </BtnDiv> 
            </MainDiv>
        </div>
    )
}

export default Report;