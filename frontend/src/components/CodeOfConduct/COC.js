import React from 'react'
import FooterPagePro from '../Footer/Footer'
import HomeHeading from '../HomeHeading/HomeHeading'
import Navbar from '../Navbar/Navbar'
import "./COC.css"
import PDFViewer from 'pdf-viewer-reactjs'

// import { Worker } from '@react-pdf-viewer/core';
// import { Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function COC() {
  return (
    <>
    <HomeHeading/>
    <Navbar/>
    <div className='BodyCoc'>
        <div className='HeaderCoc'>
                <img src={require('../../Images/coc.jpg')} />


        </div>
        {/* <div className='MainCoc'>

        <iframe src="" width="100%" height="500px">
            </iframe>


        </div> */}
        {/* <PDFViewer
            document={{
                url: require('../CodeOfConduct/IBLOG REPORT.pdf'),
            }}
        /> */}
        <iframe src={require('../CodeOfConduct/IBLOG REPORT.pdf')} width="80%" height="700px" style={{"margin-top":"1rem", "margin-left":"8rem"}}>
        </iframe>


      
    </div>
    <FooterPagePro/>
    </>)
}

export default COC
