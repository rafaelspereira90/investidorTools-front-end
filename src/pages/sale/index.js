import { useNavigate, useLocation } from 'react-router-dom';
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import * as Loader from 'react-loader-spinner';

import Header from "../../components/header";
import Logout from "../../components/logout";
import { DetailDiv, MainDiv, BtnDiv } from "./styles";
import ApiService from "../../services/api";

const Sale = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const LoadingIndicator = props => {
        const { promiseInProgress } = usePromiseTracker();
        
        return (
           promiseInProgress && 
           <div
                style={{
                    width: "100%",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Loader.TailSpin />
            </div>
        );  
    }
  
    const downlaodReport = (id) => {
        try {
            trackPromise(ApiService.downloadReport(id).then(
                (response) => {
                    var blob = base64toBlob(response);
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(blob, "pdfBase64.pdf");
                    } else {
                        const blobUrl = URL.createObjectURL(blob);
                        window.open(blobUrl);
                    }
                },
                (error) => {
                console.log(error);
                }
            ));
            } catch (err) {
            console.log(err);
            }
    };

    function base64toBlob(base64Data) {
        const sliceSize = 1024;
        const byteCharacters = atob(base64Data);
        const bytesLength = byteCharacters.length;
        const slicesCount = Math.ceil(bytesLength / sliceSize);
        const byteArrays = new Array(slicesCount);
        
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            const begin = sliceIndex * sliceSize;
            const end = Math.min(begin + sliceSize, bytesLength);
        
            const bytes = new Array(end - begin);
            for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: "application/pdf" });
    };

    return (
        <div className="app">
            <Logout />
            <Header />
            <h3 className="App-subtittle">Detalhes da Compra</h3>
            <MainDiv>
                <DetailDiv>
                    <p className="Report-tittle">Parabéns!</p>
                    <p className="subtittle2">Sua compra foi efetuada com sucesso. Clique no botão abaixo para baixar seu Relatório.</p>
                </DetailDiv>
                <BtnDiv>
                    <LoadingIndicator/>
                    <button className='btn-submit' onClick= {(e) => downlaodReport(state.reportId)}>Baixar</button>
                    <a onClick={() => navigate("/reports")}>Voltar</a>
                </BtnDiv> 
            </MainDiv>
        </div>
    )
}

export default Sale;