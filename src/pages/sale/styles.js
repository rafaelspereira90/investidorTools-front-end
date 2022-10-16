import styled from "styled-components";

export const MainDiv = styled.div`
    width: 99%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    `;

export const DetailDiv = styled.div`
    width: 100%; 
    max-height: 400px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    white-space:nowrap;
    p {
        font-family: 'Poppins',sans-serif;
        font-size: calc(3px + 3vmin);
        font-weight: bold;
        color: #ffffff;
        margin:20px;
    };
    .Report-tittle{
        color: #0DAE09;
    }
    `;

    export const BtnDiv = styled.div`
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    white-space:nowrap;
    .btn-submit {
        height: 45px;
        width: 235px;
        background: #0DAE09;
        border-radius: 10px;
        font-size: 25px;
        color: #FFFFFF;
        cursor: pointer;
        margin-bottom: 20px;
    };
    .btn-submit:hover {
        background: #2BC80B;
        cursor: pointer;
    }
    a:hover {
        color: #CDCDCD;
        cursor: pointer;
    }
    `;