import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header";
import Logout from "../../components/logout";
import ApiService from "../../services/api";
import { ReportsDiv, ReportCard, MainDiv } from "./styles";

const Reports = () => {
    const [reports, setReports] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        try {
        ApiService.getReports().then(
            (response) => {
            setReports(response.reports);
            },
            (error) => {
            console.log(error);
            }
        );
        } catch (err) {
        console.log(err);
        }
  }, []);


  const goToReportDetail = (report) => {
        navigate("/report", {
            state: {
                reportSelect: report
            }
        });
    };

    return (
        <div className="app">
            <Logout />
            <Header />
            <h3 className="App-subtittle">Últimos relatórios</h3>
            <MainDiv>
                <ReportsDiv>
                {reports.map((report, index) => (
                    <ReportCard key={index} style={{background: "url(data:image/jpeg;base64,"+report.imgCompany+")", backgroundSize: "100%"}} onClick= {(e) => goToReportDetail(report)}>
                        <p className="Report-tittle">{report.tittle}</p>
                        <p className="Report-subtittle2">Analista: {report.authorName}</p>
                        <p className="Report-subtittle2">Empresa: {report.nameCompany}</p>
                        <p className="Report-subtittle2">Data: {report.releaseDate}</p>
                        <p className="Report-price">Valor: {report.price}</p>
                    </ReportCard>   
                ))}
                </ReportsDiv>
            </MainDiv>
            
        </div>
    )
}

export default Reports;