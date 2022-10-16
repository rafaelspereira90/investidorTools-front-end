import styled from "styled-components";

export const MainDiv = styled.div`
    width: 1200px;
    height: 400px;
    `;

export const ReportsDiv = styled.div`
    width: 1200px;
    height: 400px;
    display: flex;
    padding: 10px;
    white-space:nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    overflow-scrolling: touch;
	-webkit-overflow-scrolling:touch;
    scroll-snap-type: both mandatory;
    `;

export const ReportCard =  styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    scroll-snap-align: start;
    transition: width 0.3s ease-out 0.15s;
    width: 50%;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
    
    p {
        font-family: 'Poppins',sans-serif;
        font-size: calc(2px + 2vmin);
        font-weight: bold;
        color: #000000;
        margin:2px;
        opacity: .9;
    };
    .Report-price{
        color: green;
        font-size: calc(3px + 3vmin);
        font-weight: bold;
        filter: drop-shadow(.05em .05em balck);
        background: black;
        box-shadow: .5em 0 0 black, -.5em 0 0 black;
    }
    `;