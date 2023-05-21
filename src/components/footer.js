import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer(){

return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Made by Eashaankar Sahai. For step-by-step procedure and source code checkout my github repo ➡️
        <a className='text-reset fw-bold' href='https://github.com/eashaankar/aws_mini_project'>
         github.com/eashaankar
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;