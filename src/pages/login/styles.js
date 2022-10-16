import styled from "styled-components";

export const Container = styled.div``;

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 350px;
    input {
       height: 55px;
       width: 315px; 
       margin-bottom: 30px;
       padding: 0 10px;
       background: #4D4D4D;
       letter-spacing: 0.5px;
       outline: none;
       border: none;
       border-radius: 5px;
       font-size: 20px;
       color: #B6B6B6;
    };
    .btn-submit {
        height: 45px;
        width: 235px;
        background: #0DAE09;
        border-radius: 10px;
        font-size: 25px;
        color: #FFFFFF;
    };
    .btn-submit:hover {
        background: #2BC80B;
        cursor: pointer;
    }
    `;