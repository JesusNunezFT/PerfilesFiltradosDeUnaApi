import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Consulta() {
  return (
    <MDBContainer
      breakpoint="md"
      className="justify-content-center"
      style={{ width: 500, height: 800 }}
    >
      <MDBCard>
        <MDBCardImage
          position="center"
          alt="..."
          src="https://mdbootstrap.com/img/new/standard/city/062.webp"
        ></MDBCardImage>
        <MDBCardBody>
          <MDBCardTitle>Nombre:</MDBCardTitle>
          <MDBCardText>            
          </MDBCardText>
        </MDBCardBody>
        <MDBListGroup flush>
          <MDBListGroupItem>Genero:</MDBListGroupItem>          
          <MDBListGroupItem>Email:</MDBListGroupItem>
          <MDBListGroupItem>Nacionalidad:</MDBListGroupItem>
          <MDBListGroupItem>Fecha de Nacimiento:</MDBListGroupItem>
          <MDBListGroupItem>Fecha de Registro:</MDBListGroupItem>
        </MDBListGroup>
        <MDBCardBody className=" d-flex justify-content-center">          
          <MDBCardLink href="#" ><i className="fas fa-download"></i> Descargar</MDBCardLink>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
